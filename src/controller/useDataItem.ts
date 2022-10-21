import {useQuery, useQueryClient} from '@tanstack/react-query'

type ReturnDataItem<T> = {
  data:T[]
}
export const useDataItem = <T extends DataItem = DataItem>(cashkey:string, initialData?:T[]):ReturnDataItem<T> => {
  const {data} = useQuery<T[], Error>(
    [cashkey],
    {enabled: false, initialData}
  )

  return {data: data ?? []}
}

type ReturnDataItemUtil = {
  selectDataItem:(id:string) => void
  deselectDataItem:(id:string) => void
}
export const useDataItemUtil = (cashkey:string):ReturnDataItemUtil => {
  const quetyClient = useQueryClient()

  const toShow = (state:ScreenState):ScreenState => ({...state, selected: true})
  const toHide = (state:ScreenState):ScreenState => ({...state, selected: false})

  const selectDataItem = (id:string):void => {
    quetyClient.setQueryData<Array<Required<DataItem>>>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, screenState: toShow(it.screenState)}
      )
    })
  }

  const deselectDataItem = (id:string):void => {
    quetyClient.setQueryData<Array<Required<DataItem>>>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, screenState: toHide(it.screenState)}
      )
    })
  }

  return {selectDataItem, deselectDataItem}
}

type ReturnPointItemUtil = {
  changeLocation:(id:string, location:GeoLocation) => void
}
export const usePointItemUtil = (cashkey:string):ReturnPointItemUtil => {
  const quetyClient = useQueryClient()

  const changeLocation = (id:string, location:GeoLocation):void => {
    quetyClient.setQueryData<Array<Required<PointItem>>>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, location}
      )
    })
  }

  return {changeLocation}
}
