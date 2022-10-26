import {FC, ChangeEventHandler, useId} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {LinkImageInput} from '2_molecules/infobox/LinkImageInput'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {LabelEditor} from './Editor'
import {useLocationItem} from 'controller/useVisualItem'
import {CASHKEY, useSpotItem} from './useSpotItem'

interface Props {
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({spot}) => {
  const id = useId()
  const {changeLocation} = useLocationItem(CASHKEY)
  const {pushLink, choseBillboard, setImageScale} = useSpotItem()
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)
  const addLink = (url:string):void => pushLink(spot.id, url)

  const clickImage:ChangeEventHandler<HTMLInputElement> = (e) =>
    choseBillboard(spot.id, parseInt(e.target.value))

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
    />
    <LabelEditor spot={spot} />
    <fieldset>
      <legend>画像</legend>
      <div className="image_picker">
        {spot.links.map((it, idx) =>
          <span key={it}>
            <input id={`${id}_${idx}`} type="radio" name="keylink" value={idx} onChange={clickImage} checked={idx===spot.keylink} />
            <label htmlFor={`${id}_${idx}`}>
              <img src={it} alt="画像" />
            </label>
          </span>
        )}
      </div>
      <br />
      <LinkImageInput
        label         = "URL:"
        placeholder   = 'URL for the image.'
        addLink       = {addLink}
        />
      <RangeInput
        label         = '画像サイズ'
        min           = {0.05}
        max           = {1}
        value         = {spot.imageScale}
        step          = {0.02}
        changeValue   = {(val:number):void => setImageScale(spot.id, val)}
      />
    </fieldset>
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
