import {ChangeEventHandler, FC, useId} from 'react'
import {useCesium} from 'resium'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {useLocationItemUtil} from 'controller/useLocationItem'
import {getCameraBox} from 'controller/util'
import {LabelEditor, ImageEditor} from './Editor'
import {useSpotItem} from './useSpotItem'

interface Props {
  cashkey:DataPack
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({cashkey, spot}) => {
  const id = useId()
  const {camera} = useCesium()
  const {changeLocation} = useLocationItemUtil(cashkey)
  const {setDescription} = useSpotItem(cashkey)
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)
  const handler:ChangeEventHandler<HTMLTextAreaElement> = (e) => setDescription(spot.id, e.target.value)

  const area:AreaBox = getCameraBox(camera)

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
      area            = {area}
    />
    <LabelEditor cashkey={cashkey} spot={spot} />
    <ImageEditor cashkey={cashkey} spot={spot} />

    <fieldset>
      <legend>情報</legend>
      <textarea
        id            = {`${id}_description`}
        defaultValue  = {spot.description}
        onChange      = {handler}
        rows          = {20}
        cols          = {56}
      />
    </fieldset>
  </>
}
