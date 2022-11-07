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
          ? {...it, screenState: {...it.screenState, show: true}}
          : it.screenState.show ? {...it, screenState: {...it.screenState, show: false}} : it
      )
    })
  }

  const togleItem = (id:string):void => {
    quetyClient.setQueryData<PlateauStream[]>([CASHKEY], (state) => {
      if (state == null) return []

      return state.map((it) =>
        it.id === id
          ? {...it, screenState: {...it.screenState, show: !it.screenState.show}}
          : it
      )
    })
  }

  return {pickItem, togleItem}
}
