import {FC, useId} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {LabelEditor, ImageEditor} from './Editor'
import {useLocationItem} from 'controller/useVisualItem'

interface Props {
  cashkey:DataPack
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({cashkey, spot}) => {
  const id = useId()
  const {changeLocation} = useLocationItem(cashkey)
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
    />
    <LabelEditor cashkey={cashkey} spot={spot} />
    <ImageEditor cashkey={cashkey} spot={spot} />

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
