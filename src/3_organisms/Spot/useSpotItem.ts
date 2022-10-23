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

  const propUpdate = (id:string, callback:(state:SpotItem) => SpotItem):void => {
    quetyClient.setQueryData<SpotItem[]>([CASHKEY], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }

  const pushLink = (id:string, url:string):void =>
    propUpdate(id, (state) => ({...state, links: pushArray(state.links, url)}))

  const choseBillboard = (id:string, index:number):void =>
    propUpdate(id, (state) => ({...state, keylink: index}))

  const setBgColor = (id:string, color:string):void =>
    propUpdate(id, (state) => ({...state, bgColor: color}))

  return {pushLink, choseBillboard, setBgColor}
}
