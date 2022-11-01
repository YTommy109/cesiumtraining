import {FC, ReactNode} from 'react'
import {Spot} from '3_organisms/Spot/Spot'
import {SpotList} from './SpotList'
import {useVisualItem} from 'controller/useVisualItem'
import {SpotMarker} from './SpotMarker'
import {DATA_CURRY} from './data_curry'
import {DATA_HOSHINO} from './data_hoshino'
import {FaHotel} from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/Md'

const DATAMAP:Record<DataPack, SpotItem[]> = {
  curry:   DATA_CURRY,
  hotel:   DATA_HOSHINO,
  plateau: [],
  '':      []
}

type Props = {
  cashkey:DataPack
}
export const SpotPack:FC<Props> = ({cashkey}) => {
  const {data:spots} = useVisualItem<SpotItem>(cashkey, DATAMAP[cashkey])

  const TITLEMAP:Record<DataPack, ReactNode> = {
    curry:   <><MdOutlineFoodBank />カレー屋さん ({spots.length})</>,
    hotel:   <><FaHotel />星野リゾート ({spots.length})</>,
    plateau: null,
    '':      null
  }

  return <>
    <SpotMarker
      cashkey   = {cashkey}
    />
    <SpotList
      header    = {TITLEMAP[cashkey]}
      spots     = {spots}
    />
    {spots.map((it) =>
      <Spot
        key     = {it.id}
        cashkey = {cashkey}
        spot    = {it}
      />
    )}
  </>
}
