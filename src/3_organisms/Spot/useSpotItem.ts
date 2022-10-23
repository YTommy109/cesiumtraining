import {useQueryClient} from '@tanstack/react-query'

const pushArray = <T=string>(org:T[], link:T):T[] => [...org, link]

export const CASHKEY = 'spot'

type ReturnSpotItem = {
  pushLink:(id:string, url:string) => void
  choseBillboard:(id:string, index:number) => void
  setBgColor:(id:string, color:string) => void
}
export const useSpotItem = ():ReturnSpotItem => {
  const quetyClient = useQueryClient()

  const pushLink = (id:string, url:string):void => {
    quetyClient.setQueryData<SpotItem[]>([CASHKEY], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, links: pushArray(it.links, url)}
      )
    })
  }

  const choseBillboard = (id:string, index:number):void => {
    quetyClient.setQueryData<SpotItem[]>([CASHKEY], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, keylink: index}
      )
    })
  }

  const setBgColor = (id:string, color:string):void => {
    quetyClient.setQueryData<SpotItem[]>([CASHKEY], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, bgColor: color}
      )
    })
  }

  return {pushLink, choseBillboard, setBgColor}
}
