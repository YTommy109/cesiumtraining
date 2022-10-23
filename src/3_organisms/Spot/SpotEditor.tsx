import {FC, Fragment, ChangeEventHandler, useId} from 'react'
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
  const {pushLink, choseBillboard} = useSpotItem()
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)
  const addLink = (url:string):void => pushLink(spot.id, url)
  const clickImage:ChangeEventHandler<HTMLInputElement> = (e) =>
    choseBillboard(spot.id, parseInt(e.target.value))

  return <>
    <LocationEntry
      location = {spot.location}
      changeLocation = {setLocation}
    />
    <br />
    <div style={{display: 'grid', gridTemplateColumns: '30px repeat(8, 20px)'}}>色:
      {COLORS.map(it =>
        <span key={it} style={{backgroundColor: it}}></span>
      )}
    </div>
    <br />
    <div>
      {spot.links.map((it, idx) =>
        <Fragment key={it}>
          <input id={`${id}_${idx}`} type="radio" name="keylink" style={{display: 'none'}} value={idx} onChange={clickImage} />
          <label htmlFor={`${id}_${idx}`}>
            <img src={it} style={{width: '80px', height: '60px'}} />
          </label>
        </Fragment>
      )}
    </div>
    <br />
    <LinkImageInput
      label        = "URL"
      placeholder  = 'URL for the image.'
      addLink      = {addLink}
      />
    <br />
    <textarea
      defaultValue = {spot.description}
      style = {{resize: 'vertical'}}
      rows = {20}
      cols = {56}
    />
  </>
}
