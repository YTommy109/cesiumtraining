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

type ReturnCylinderItem = {
  setTopRadius:(id:string, radius:number) => void
  setBottomRadius:(id:string, radius:number) => void
}
export const useCylinderItem = (cashkey:DataPack):ReturnCylinderItem => {
  const quetyClient = useQueryClient()
  const update = useCallback((id:string, callback:(state:CylinderItem) => CylinderItem):void => {
    quetyClient.setQueryData<CylinderItem[]>([cashkey], (state) => {
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

type ReturnBoxItem = {
  setWidth:(id:string, radius:number) => void
  setDepth:(id:string, radius:number) => void
}
export const useBoxItem = (cashkey:DataPack):ReturnBoxItem => {
  const quetyClient = useQueryClient()
  const update = useCallback((id:string, callback:(state:BoxItem) => BoxItem):void => {
    quetyClient.setQueryData<BoxItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }, [cashkey, quetyClient])

  const setWidth = useCallback((id:string, width:number):void =>
    update(id, (state) => ({...state, length: width}))
  , [update])

  const setDepth = useCallback((id:string, depth:number):void =>
    update(id, (state) => ({...state, length: depth}))
  , [update])

  return {setWidth, setDepth}
}
