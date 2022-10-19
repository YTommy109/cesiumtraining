import { FC } from 'react'
import { LocationEntry } from '2_molecules/infobox/LocationEntry'

type Props = {
  pyramid:Pyramid
  changeLocation:(id:string, location:GeoLocation)=>void
}
export const SolidEditor:FC<Props> = ({pyramid, changeLocation}) => {
  const setLocation = (val:GeoLocation) => changeLocation(pyramid.id, val)

  return <>
    <LocationEntry
      location        = {pyramid.location}
      changeLocation  = {setLocation}
    />
  </>
}
