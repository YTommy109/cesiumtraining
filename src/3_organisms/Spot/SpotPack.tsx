import {FC, ReactNode, useCallback} from 'react'
import {Camera, useCesium} from 'resium'
import {Spot} from '3_organisms/Spot/Spot'
import {useLocationItem} from 'controller/useLocationItem'
import {SpotList} from './SpotList'
import {DATA_CURRY} from './data_curry'
import {DATA_HOSHINO} from './data_hoshino'
import {FaHotel} from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/Md'

const DATAMAP:Record<DataPack, SpotItem[]> = {
  curry:   DATA_CURRY,
  hotel:   DATA_HOSHINO,
  plateau: [],
  pyramid: [],
  '':      []
}

type Props = {
  cashkey:DataPack
}
export const SpotPack:FC<Props> = ({cashkey}) => {
  const {data:spots} = useLocationItem<SpotItem>(cashkey, DATAMAP[cashkey])
  const {viewer} = useCesium()

  const TITLEMAP:Record<DataPack, ReactNode> = {
    curry:   <><MdOutlineFoodBank />カレー屋さん ({spots.length})</>,
    hotel:   <><FaHotel />星野リゾート ({spots.length})</>,
    plateau: null,
    pyramid: null,
    '':      null
  }

  const changeHeading = useCallback(() => {
    console.log('width2: ' + viewer.container.clientWidth)
    console.log('height2: ' + viewer.container.clientHeight)
  }, [viewer.container])

  return <>
    <Camera
      percentageChanged = {0.1}
      onChange          = {changeHeading}
    />
    <SpotList
      header    = {TITLEMAP[cashkey]}
      cashkey   = {cashkey}
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
