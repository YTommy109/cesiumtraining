import { FC } from 'react'
import { LocationEntry } from '2_molecules/infobox/LocationEntry'

type Props = {
  spot:Spot
  changeLocation:(id:string, location:GeoLocation)=>void
}
export const SpotEditor:FC<Props> = ({spot, changeLocation}) => {
  const setLocation = (val:GeoLocation) => changeLocation(spot.id, val)

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
    />
  </>
}
