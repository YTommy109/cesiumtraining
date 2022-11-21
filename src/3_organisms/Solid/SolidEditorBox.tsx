import {FC} from 'react'
import {useCesium} from 'resium'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {useLocationItemUtil} from 'controller/useLocationItem'
import {getCameraBox} from 'controller/util'
import {useSolidItem, useBoxItem} from './useSolidItem'
import {BiPyramid, BiCylinder, BiCube} from 'react-icons/bi'

const CASHKEY = 'pyramid'

type Props = {
  cashkey:DataPack
  item:BoxItem
}
export const BoxEditor:FC<Props> = ({cashkey, item}) => {
  const {changeLocation} = useLocationItemUtil(CASHKEY)
  const {camera} = useCesium()
  const {setLength} = useSolidItem(cashkey)
  const {setWidth, setDepth, setHeading} = useBoxItem(cashkey)

  const setLocation = (val:GeoLocation):void => changeLocation(item.id, val)
  const area:AreaBox = getCameraBox(camera)

  return <>
    <LocationEntry
      location        = {item.location}
      changeLocation  = {setLocation}
      area            = {area}
    />
    <BiPyramid />
    <BiCylinder />
    <BiCube />
    <RangeInput
      label         = '幅:'
      min           = {0}
      max           = {10000}
      value         = {item.width}
      step          = {10}
      changeValue   = {(val:number):void => {
        setWidth(item.id, val)
      }}
    />
    <RangeInput
      label         = '奥行き:'
      min           = {0}
      max           = {10000}
      value         = {item.depth}
      step          = {10}
      changeValue   = {(val:number):void => {
        setDepth(item.id, val)
      }}
    />
    <RangeInput
      label         = '長さ:'
      min           = {0}
      max           = {10000}
      value         = {item.length}
      step          = {10}
      changeValue   = {(val:number):void => {
        setLength(item.id, val)
      }}
    />
    <RangeInput
      label         = '向き:'
      min           = {-180}
      max           = {180}
      value         = {item.heading}
      step          = {1}
      changeValue   = {(val:number):void => {
        setHeading(item.id, val)
      }}
    />
  </>
}
