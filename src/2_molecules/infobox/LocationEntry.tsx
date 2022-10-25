import {FC} from 'react'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {LatLonInput} from '2_molecules/infobox/LatLonInput'

const STL = {
  UL: {
    listStyle: 'none',
    padding:   '0'
  }
}

type Props = {
  location:GeoLocation
  changeLocation:(location:GeoLocation) => void
}
export const LocationEntry:FC<Props> = ({location, changeLocation}) => {
  const setLon    = (val:number):void => changeLocation({...location, lon: val})
  const setLat    = (val:number):void => changeLocation({...location, lat: val})
  const setHeight = (val:number):void => changeLocation({...location, height: val})
  const setLatLon = (val:GeoLocation):void => changeLocation({...location, lon: val.lon, lat: val.lat})

  return <fieldset>
    <legend>位置</legend>
    <ul style={STL.UL}>
      <li>
        <RangeInput
          label       = "経度:"
          value       = {location.lon}
          changeValue = {setLon}
          min         = {-180}
          max         = {180}
          step        = {0.001}
        />
      </li>
      <li>
        <RangeInput
          label       = "緯度:"
          value       = {location.lat}
          changeValue = {setLat}
          min         = {-90}
          max         = {90}
          step        = {0.001}
        />
      </li>
      <li>
        {location.height != null && <RangeInput
          label         = "標高:"
          changeValue   = {setHeight}
          value         = {location.height}
          min           = {0}
          max           = {10000}
          step          = {10}
        />}
      </li>
      <li>
        <LatLonInput
          label         = "緯度経度:"
          value         = {location}
          enter         = {setLatLon}
      />
      </li>
    </ul>
  </fieldset>
}
