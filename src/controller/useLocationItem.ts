import {useQuery, useQueryClient} from '@tanstack/react-query'
import {calcTerrainHeights} from './util'

type ReturnLocationItem<T> = {
  data:T[]
}
export const useLocationItem = <T extends LocationItem = LocationItem>(cashkey:string, initialData?:T[]):ReturnLocationItem<T> => {
  const {data} = useQuery<T[], Error>([cashkey], async ():Promise<T[]> => {
    return await calcTerrainHeights(initialData ?? [])
  }, {staleTime: Infinity, enabled: true})

  return {data: data ?? []}
}

type ReturnLocationUtilItem = {
  changeLocation:(id:string, location:GeoLocation) => void
}
export const useLocationItemUtil = (cashkey:string):ReturnLocationUtilItem => {
  const quetyClient = useQueryClient()

  const changeLocation = (id:string, location:GeoLocation):void => {
    quetyClient.setQueryData<LocationItem[]>([cashkey], (state) => {
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
