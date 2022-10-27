import {useQueryClient} from '@tanstack/react-query'
import {CASHKEY} from './usePlateau'

type ReturnPlateauItem = {
  selectItem:(id:string) => void
}
export const usePlateauUtil = ():ReturnPlateauItem => {
  const quetyClient = useQueryClient()

  const selectItem = (id:string):void => {
    quetyClient.setQueryData<PlateauStream[]>([CASHKEY], (state) => {
      if (state == null) return []

      return state.map((it) =>
        it.id !== id
          ? {...it, show: false}
          : {...it, show: true}
      )
    })
  }

  return {selectItem}
}
