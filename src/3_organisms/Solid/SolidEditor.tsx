import {FC} from 'react'
import {useCesium} from 'resium'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {useLocationItemUtil} from 'controller/useLocationItem'
import {getCameraBox} from 'controller/util'
import {useSolidItem} from './useSolidItem'
import {useCylinderItem} from './useCylinderItem'
import {BiPyramid, BiCylinder, BiCube} from 'react-icons/bi'

const CASHKEY = 'pyramid'

type Props = {
  cashkey:DataPack
  item:SolidItem
}
export const SolidEditor:FC<Props> = ({cashkey, item: pyramid}) => {
  const {changeLocation} = useLocationItemUtil(CASHKEY)
  const {camera} = useCesium()
  const {setLength} = useSolidItem(cashkey)
  const {setTopRadius, setBottomRadius} = useCylinderItem(cashkey)

  const setLocation = (val:GeoLocation):void => changeLocation(pyramid.id, val)
  const area:AreaBox = getCameraBox(camera)

  return <>
    <LocationEntry
      location        = {pyramid.location}
      changeLocation  = {setLocation}
      area            = {area}
    />
    <BiPyramid />
    <BiCylinder />
    <BiCube />
    <RangeInput
      label         = '上面サイズ:'
      min           = {0}
      max           = {10000}
      value         = {pyramid.topRadius}
      step          = {10}
      changeValue   = {(val:number):void => {
        setTopRadius(pyramid.id, val)
      }}
    />
    <RangeInput
      label         = '底面サイズ:'
      min           = {0}
      max           = {10000}
      value         = {pyramid.bottomRadius}
      step          = {10}
      changeValue   = {(val:number):void => {
        setBottomRadius(pyramid.id, val)
      }}
    />
    <RangeInput
      label         = '長さ:'
      min           = {0}
      max           = {10000}
      value         = {pyramid.length}
      step          = {10}
      changeValue   = {(val:number):void => {
        setLength(pyramid.id, val)
      }}
    />  </>
}
