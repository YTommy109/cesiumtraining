import {useQueryClient} from '@tanstack/react-query'
import {v4 as uuidv4} from 'uuid'

const pushArray = <T=string>(org:T[], link:T):T[] => [...org, link]

export const CASHKEY = 'spot'

type ReturnSpotItem = {
  create:(location:GeoLocation) => void
  setTitle:(id:string, title:string) => void
  pushLink:(id:string, url:string) => void
  choseBillboard:(id:string, index:number) => void
  setBgColor:(id:string, color:string) => void
  setLabelHeight:(id:string, height:number) => void
  setLabelScale:(id:string, height:number) => void
  setImageScale:(id:string, height:number) => void
}
export const useSpotItem = ():ReturnSpotItem => {
  const quetyClient = useQueryClient()

  const create = (location:GeoLocation):void => {
    quetyClient.setQueryData<SpotItem[]>([CASHKEY], (state) => {
      if (state == null) return []
      return [...state, {
        id:          uuidv4(),
        title:       '名称未設定',
        description: '# 名称未設定',
        location,
        links:       [],
        keylink:     null,
        bgColor:     'black',
        labelHeight: 100,
        labelScale:  0.5,
        imageScale:  0.2
      }]
    })
  }

  const update = (id:string, callback:(state:SpotItem) => SpotItem):void => {
    quetyClient.setQueryData<SpotItem[]>([CASHKEY], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }
  const setTitle = (id:string, title:string):void =>
    update(id, (state) => ({...state, title}))

  const pushLink = (id:string, url:string):void =>
    update(id, (state) => ({...state, links: pushArray(state.links, url)}))

  const choseBillboard = (id:string, index:number):void =>
    update(id, (state) => ({...state, keylink: index}))

  const setBgColor = (id:string, color:string):void =>
    update(id, (state) => ({...state, bgColor: color}))

  const setLabelHeight = (id:string, height:number):void =>
    update(id, (state) => ({...state, labelHeight: height}))

  const setLabelScale = (id:string, scale:number):void =>
    update(id, (state) => ({...state, labelScale: scale}))

  const setImageScale = (id:string, scale:number):void =>
    update(id, (state) => ({...state, imageScale: scale}))

  return {create, setTitle, pushLink, choseBillboard, setBgColor, setLabelHeight, setLabelScale, setImageScale}
}
