import {v4 as uuidv4} from 'uuid'
import {useQuery} from '@tanstack/react-query'

export const CASHKEY = 'plateau'
type RAW_PLATEAU = {
  CITYCODE:string
  TYPE:string
  URL:string
}

// 地域コードマスター作成
const getCityCode = async ():Promise<Record<string, CityInfo>> => {
  const ret:Record<string, CityInfo> = {}
  const headers = {'Content-Type': 'text/csv'}
  const url = '/data/FEA_hyoujun-20221020094823.csv'

  const res = await fetch(url, {method: 'GET', mode: 'cors', headers})
  const text = await res.text()
  text.split('\n').forEach((line:string) => {
    const temp = line.split(',').map((it:string) => it.replaceAll('"', ''))
    ret[temp[0]] = {
      code:       temp[0],
      prefecture: temp[1],
      city:       temp[2],
      cityKana:   temp[3],
      town:       temp[4],
      townKana:   temp[5]
    }
  })

  return ret
}

// PLATEAU 一覧
const getPlateau = async ():Promise<PlateauStream[]> => {
  const reg = /_tokyo\/(?<code>[0-9]{5})_/

  const cityInfo = await getCityCode()
  const headers = {'Content-Type': 'application/json'}
  const url = '/data/3dtiles_url.json'
  const res = await fetch(url, {method: 'GET', mode: 'cors', headers})
  const data:RAW_PLATEAU[] = await res.json()

  const getCode = (it:RAW_PLATEAU):string => {
    return reg.test(it.URL)
      ? it.URL.match(reg)?.groups?.code ?? it.CITYCODE
      : it.CITYCODE
  }

  return data.map(it => {
    const info:CityInfo = cityInfo[getCode(it)]
    const texture:boolean = it.URL.includes('/texture/')
    const lowResolution:boolean = it.URL.includes('/low_resolution/')

    return {
      id:       uuidv4(),
      title:    `${info.prefecture}${info.city}${info.town}${texture ? '_テク' : ''}${lowResolution ? '_ロー' : ''}`,
      cityCode: it.CITYCODE,
      dataType: it.TYPE,
      url:      it.URL,
      cityInfo: info,
      texture,
      lowResolution,
      show:     false
    }
  })
}

type ReturnPlateau = {
  plateau:PlateauStream[]
}
export const usePlateau = ():ReturnPlateau => {
  const {data} = useQuery<PlateauStream[], Error>([CASHKEY], getPlateau, {staleTime: Infinity})

  return {plateau: data ?? []}
}
