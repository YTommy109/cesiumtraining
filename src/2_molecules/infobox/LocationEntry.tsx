import {FC} from 'react'
import {RangeInput} from '2_molecules/infobox/RangeInput'

const STL = {
  FIELDSET: {
    borderRadius: '8px',
    borderColor:  'dimgray'
  },
  UL: {
    listStyle: 'none',
    padding:   '0'
  },
  LI: {
    display:             'grid',
    gridTemplateColumns: '80px 220px 80px'
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

  return <fieldset style={STL.FIELDSET}>
    <legend>位置</legend>
    <ul style={STL.UL}>
      <li style={STL.LI}>
        <RangeInput
          label       = "経度:"
          value       = {location.lon}
          changeValue = {setLon}
          min         = {-180}
          max         = {180}
          step        = {0.001}
        />
      </li>
      <li style={STL.LI}>
        <RangeInput
          label       = "緯度:"
          value       = {location.lat}
          changeValue = {setLat}
          min         = {-90}
          max         = {90}
          step        = {0.001}
        />
      </li>
      <li style={STL.LI}>
        {<RangeInput
          label         = "標高:"
          changeValue   = {setHeight}
          value         = {location.height}
          min           = {0}
          max           = {10000}
          step          = {10}
          disabled      = {!(location.height ?? true)}
        />}
      </li>
    </ul>
  </fieldset>
}
