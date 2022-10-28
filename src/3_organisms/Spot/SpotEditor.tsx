import {FC, useId} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {LabelEditor, ImageEditor} from './Editor'
import {useLocationItem} from 'controller/useVisualItem'
import {CASHKEY} from './useSpotItem'

interface Props {
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({spot}) => {
  const id = useId()
  const {changeLocation} = useLocationItem(CASHKEY)
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
    />
    <LabelEditor spot={spot} />
    <ImageEditor spot={spot} />

    <fieldset>
      <legend>情報</legend>
      <textarea
        id            = {`${id}_description`}
        defaultValue  = {spot.description}
        rows          = {20}
        cols          = {56}
      />
    </fieldset>
  </>
}
