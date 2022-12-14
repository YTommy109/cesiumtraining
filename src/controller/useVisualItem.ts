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

const toShow = (state:ScreenState):ScreenState => ({...state, selected: true})
const toHide = (state:ScreenState):ScreenState => ({...state, selected: false})

type ReturnDataItemUtil = {
  select:(id:string) => void
  deselect:(id:string) => void
}
export const useVisualItemUtil = (cashkey:string):ReturnDataItemUtil => {
  const quetyClient = useQueryClient()

  const select = (id:string):void => {
    quetyClient.setQueryData<Array<Required<LocationItem>>>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, screenState: toShow(it.screenState)}
      )
    })
  }

  const deselect = (id:string):void => {
    quetyClient.setQueryData<Array<Required<LocationItem>>>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : {...it, screenState: toHide(it.screenState)}
      )
    })
  }

  return {select, deselect}
}
