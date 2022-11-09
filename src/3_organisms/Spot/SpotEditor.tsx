import {ChangeEventHandler, FC, useId} from 'react'
import {Math} from 'cesium'
import {useCesium} from 'resium'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {LabelEditor, ImageEditor} from './Editor'
import {useLocationItemUtil} from 'controller/useLocationItem'
import {useSpotItem} from './useSpotItem'

interface Props {
  cashkey:DataPack
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({cashkey, spot}) => {
  const id = useId()
  const {changeLocation} = useLocationItemUtil(cashkey)
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)
  const {setDescription} = useSpotItem(cashkey)
  const handler:ChangeEventHandler<HTMLTextAreaElement> = (e) => setDescription(spot.id, e.target.value)

  const {camera} = useCesium()
  const hoge = camera.computeViewRectangle()
  const area:AreaBox = {
    west:  Math.toDegrees(hoge.west),
    east:  Math.toDegrees(hoge.east),
    north: Math.toDegrees(hoge.north),
    south: Math.toDegrees(hoge.south)
  }

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
