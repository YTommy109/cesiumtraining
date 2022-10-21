import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useDataItem = <T extends DataItem = DataItem>(cashkey:string, initialData?:T[]) => {
  const { data } = useQuery<T[], Error>(
    [cashkey],
    {enabled: false, initialData}
  )

  return {data: data ?? []}
}

export const useDataItemUtil = (cashkey:string) => {
  const quetyClient = useQueryClient()

  const toShow = (state:ScreenState): ScreenState => ({...state, selected: true})
  const toHide = (state:ScreenState): ScreenState => ({...state, selected: false})

  const selectDataItem = (id:string):void => {
    quetyClient.setQueryData<Required<DataItem>[]>([cashkey], (state) => {
      if (!state) return []
      return state.map((it) => 
        it.id !== id ? it
        : {...it, screenState: toShow(it.screenState)}
    )})
  }

  const deselectDataItem = (id:string):void => {
    quetyClient.setQueryData<Required<DataItem>[]>([cashkey], (state) => {
      if (!state) return []
      return state.map((it) => 
        it.id !== id ? it
        : {...it, screenState: toHide(it.screenState)}
    )})
  }

  return {selectDataItem, deselectDataItem}
}

export const usePointItemUtil = (cashkey:string) => {
  const quetyClient = useQueryClient()

  const changeLocation = (id:string, location:GeoLocation):void => {
    quetyClient.setQueryData<Required<PointItem>[]>([cashkey], (state) => {
      if (!state) return []
      return state.map((it) => 
        it.id !== id ? it
        : {...it, location}
    )})
  }

  return {changeLocation}
}
