import {FC} from 'react'
import {Spot} from '3_organisms/Spot/Spot'
import {SpotList} from './SpotList'
import {useVisualItem} from 'controller/useVisualItem'
import {CASHKEY} from './useSpotItem'
import {SpotMarker} from './SpotMarker'
import {DATA_CURRY} from './data_curry'

export const SpotTray:FC = () => {
  const {data:spots} = useVisualItem<SpotItem>(CASHKEY, DATA_CURRY)

  return <>
    <SpotMarker />
    <SpotList
      spots = {spots}
    />
    {spots.map((it) =>
      <Spot
        key   = {it.id}
        spot  = {it}
      />
    )}
  </>
}
