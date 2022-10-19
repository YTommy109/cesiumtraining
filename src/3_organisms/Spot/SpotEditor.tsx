import { FC } from 'react'
import { LocationEntry } from '2_molecules/infobox/LocationEntry'
import { useSpot } from './useSpot'

type Props = {
  spot:Spot
}
export const SpotEditor:FC<Props> = ({spot}) => {
  const { changeLocation } = useSpot()
  const setLocation = (val:GeoLocation) => changeLocation(spot.id, val)

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
    />
    <table>
      <tbody>
        <tr><th>ピン</th><td>なし</td><td>red</td><td>blue</td><td>green</td><td>yellow</td></tr>
      </tbody>
    </table>
    <ul>
      <li><input type="radio" />イメージ1</li>
      <li><input type="radio" />イメージ2</li>
      <li><input type="radio" />イメージ3</li>
      <li><input type="file" /></li>
    </ul>
  </>
}
