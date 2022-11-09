import {FC} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {useLocationItemUtil} from 'controller/useLocationItem'

const CASHKEY = 'pyramid'

type Props = {
  pyramid:PyramidItem
}
export const SolidEditor:FC<Props> = ({pyramid}) => {
  const {changeLocation} = useLocationItemUtil(CASHKEY)
  const setLocation = (val:GeoLocation):void => changeLocation(pyramid.id, val)

  return <>
    <LocationEntry
      location        = {pyramid.location}
      changeLocation  = {setLocation}
    />
  </>
}
