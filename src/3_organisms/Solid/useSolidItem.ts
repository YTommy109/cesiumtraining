import {useCallback} from 'react'
import {useQueryClient} from '@tanstack/react-query'

type ReturnSolidItem = {
  setLength:(id:string, radius:number) => void
}
export const useSolidItem = (cashkey:DataPack):ReturnSolidItem => {
  const quetyClient = useQueryClient()
  const update = useCallback((id:string, callback:(state:SolidItem) => SolidItem):void => {
    quetyClient.setQueryData<SolidItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }, [cashkey, quetyClient])

  const setLength = useCallback((id:string, length:number):void =>
    update(id, (state) => ({...state, length}))
  , [update])

  return {setLength}
}
