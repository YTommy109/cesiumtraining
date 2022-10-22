import {useQueryClient} from '@tanstack/react-query'

const pushArray = <T=string>(org:T[], link:T):T[] => [...org, link]

export const CASHKEY = 'spot'

type ReturnSpotItem = {
  pushLink:(id:string, url:string) => void
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

  return {pushLink}
}
