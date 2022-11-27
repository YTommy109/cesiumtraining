import {useCallback} from 'react'
import {useQuery, useQueryClient} from '@tanstack/react-query'

type ReturnVisualItem<T> = {
  data:T[]
}
export const useVisualItem = <T extends LocationItem = LocationItem>(cashkey:string, initialData?:T[]):ReturnVisualItem<T> => {
  const {data} = useQuery<T[], Error>(
    [cashkey],
    {enabled: false, initialData}
  )

  return {data: data ?? []}
}

const toSelect = (state:ScreenState):ScreenState => ({...state, selected: true})
const toDeselect = (state:ScreenState):ScreenState => ({...state, selected: false})
const toReverse = (state:ScreenState):ScreenState => ({...state, selected: !state.selected})

type ReturnDataItemUtil = {
  noselect:() => void
  select:(id:string) => void
  deselect:(id:string) => void
  toggle:(id:string) => void
  pickOne:(id:string) => void
}
export const useVisualItemUtil = (cashkey:string):ReturnDataItemUtil => {
  const quetyClient = useQueryClient()

  const noselect = useCallback(():void => {
    quetyClient.setQueryData<VisualItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.screenState.show
          ? {...it, screenState: toDeselect(it.screenState)}
          : it
      )
    })
  }
  , [quetyClient, cashkey])

  const update = useCallback((id:string, callback:(state:VisualItem) => VisualItem):void => {
    quetyClient.setQueryData<VisualItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }, [cashkey, quetyClient])

  const select = useCallback((id:string):void =>
    update(id, (state) => ({...state, screenState: toSelect(state.screenState)}))
  , [update])

  const deselect = useCallback((id:string):void =>
    update(id, (state) => ({...state, screenState: toDeselect(state.screenState)}))
  , [update])

  const toggle = useCallback((id:string):void =>
    update(id, (state) => ({...state, screenState: toReverse(state.screenState)}))
  , [update])

  const pickOne = useCallback((id:string):void => {
    quetyClient.setQueryData<VisualItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id === id
          ? {...it, screenState: toSelect(it.screenState)}
          : (it.screenState.show ? {...it, screenState: toDeselect(it.screenState)} : it)
      )
    })
  }
  , [quetyClient, cashkey])

  return {noselect, select, deselect, toggle, pickOne}
}
