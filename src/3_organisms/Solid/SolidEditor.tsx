import { FC } from 'react'
import { LocationEntry } from '2_molecules/infobox/LocationEntry'
import { useSolid } from './useSolid'

type Props = {
  pyramid:PyramidItem
}
export const SolidEditor:FC<Props> = ({pyramid}) => {
  const {changeLocation} = useSolid()
  const setLocation = (val:GeoLocation) => changeLocation(pyramid.id, val)

  return <>
    <LocationEntry
      location        = {pyramid.location}
      changeLocation  = {setLocation}
    />
  </>
}
