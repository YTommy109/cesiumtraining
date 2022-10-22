import {FC} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {useLocationItem} from 'controller/useVisualItem'

const CASHKEY = 'pyramid'

type Props = {
  pyramid:PyramidItem
}
export const SolidEditor:FC<Props> = ({pyramid}) => {
  const {changeLocation} = useLocationItem(CASHKEY)
  const setLocation = (val:GeoLocation):void => changeLocation(pyramid.id, val)

  return <>
    <LocationEntry
      location        = {pyramid.location}
      changeLocation  = {setLocation}
    />
  </>
}
