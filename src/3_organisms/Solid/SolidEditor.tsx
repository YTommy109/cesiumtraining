import { FC } from 'react'
import { LocationEntry } from '2_molecules/infobox/LocationEntry'
import { usePointItemUtil } from 'controller/useDataItem'

const CASHKEY = 'pyramid'

type Props = {
  pyramid:PyramidItem
}
export const SolidEditor:FC<Props> = ({pyramid}) => {
  const {changeLocation} = usePointItemUtil(CASHKEY)
  const setLocation = (val:GeoLocation) => changeLocation(pyramid.id, val)

  return <>
    <LocationEntry
      location        = {pyramid.location}
      changeLocation  = {setLocation}
    />
  </>
}
