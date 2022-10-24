import {FC, ChangeEventHandler, useId} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {LinkImageInput} from '2_molecules/infobox/LinkImageInput'
import {useLocationItem} from 'controller/useVisualItem'
import {CASHKEY, useSpotItem} from './useSpotItem'

const COLORS = ['black', 'gray', 'red', 'pink', 'blue', 'green', 'yellow', 'white']
interface Props {
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({spot}) => {
  const id = useId()
  const {changeLocation} = useLocationItem(CASHKEY)
  const {pushLink, choseBillboard, setBgColor} = useSpotItem()
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)
  const addLink = (url:string):void => pushLink(spot.id, url)
  const clickImage:ChangeEventHandler<HTMLInputElement> = (e) =>
    choseBillboard(spot.id, parseInt(e.target.value))
  const clickBgColor:ChangeEventHandler<HTMLInputElement> = (e) =>
    setBgColor(spot.id, e.target.value)

  return <>
    <LocationEntry
      location        = {spot.location}
      changeLocation  = {setLocation}
    />
    <br />
    <div className="color_picker">色:
      {COLORS.map(it =>
      <span key={it}>
        <input id={`${id}_color_${it}`} type="radio" name="bgcolor" value={it} onChange={clickBgColor} checked={it===spot.bgColor} />
        <label htmlFor={`${id}_color_${it}`} style={{backgroundColor: it}}>
          &nbsp;&nbsp;&nbsp;
        </label>
      </span>
      )}
    </div>
    <br />
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
    <br />
    <label htmlFor  ={`${id}_description`}>
      情報:
    </label>
    <textarea
      id            = {`${id}_description`}
      defaultValue  = {spot.description}
      rows          = {20}
      cols          = {56}
    />
  </>
}
