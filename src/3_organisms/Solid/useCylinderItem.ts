import {useCallback} from 'react'
import {useQueryClient} from '@tanstack/react-query'

type ReturnCylinderItem = {
  setTopRadius:(id:string, radius:number) => void
  setBottomRadius:(id:string, radius:number) => void
}
export const useCylinderItem = (cashkey:DataPack):ReturnCylinderItem => {
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

  const setTopRadius = useCallback((id:string, radius:number):void =>
    update(id, (state) => ({...state, topRadius: radius}))
  , [update])

  const setBottomRadius = useCallback((id:string, radius:number):void =>
    update(id, (state) => ({...state, bottomRadius: radius}))
  , [update])

  return {setTopRadius, setBottomRadius}
}
