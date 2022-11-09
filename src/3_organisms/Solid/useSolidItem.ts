import {useCallback} from 'react'
import {useQueryClient} from '@tanstack/react-query'

type ReturnSolidItem = {
  setTopRadius:(id:string, radius:number) => void
  setBottomRadius:(id:string, radius:number) => void
  setLength:(id:string, radius:number) => void
}
export const useSolidItem = (cashkey:DataPack):ReturnSolidItem => {
  const quetyClient = useQueryClient()
  const update = useCallback((id:string, callback:(state:PyramidItem) => PyramidItem):void => {
    quetyClient.setQueryData<PyramidItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }, [cashkey, quetyClient])

  const setTopRadius = useCallback((id:string, radius:number):void =>
    update(id, (state) => ({...state, topRadius: radius}))
  , [update])

  const setBottomRadius = useCallback((id:string, radius:number):void =>
    update(id, (state) => ({...state, bottomRadius: radius}))
  , [update])

  const setLength = useCallback((id:string, length:number):void =>
    update(id, (state) => ({...state, length}))
  , [update])

  return {setTopRadius, setBottomRadius, setLength}
}
