import {useQueryClient} from '@tanstack/react-query'
import {CASHKEY} from './usePlateau'

type ReturnPlateauItem = {
  pickItem:(id:string) => void
  togleItem:(id:string) => void
}
export const usePlateauUtil = ():ReturnPlateauItem => {
  const quetyClient = useQueryClient()

  const pickItem = (id:string):void => {
    quetyClient.setQueryData<PlateauStream[]>([CASHKEY], (state) => {
      if (state == null) return []

      return state.map((it) =>
        it.id === id
          ? {...it, show: true}
          : it.show ? {...it, show: false} : it
      )
    })
  }

  const togleItem = (id:string):void => {
    quetyClient.setQueryData<PlateauStream[]>([CASHKEY], (state) => {
      if (state == null) return []

      return state.map((it) =>
        it.id === id
          ? {...it, show: !it.show}
          : it
      )
    })
  }

  return {pickItem, togleItem}
}
