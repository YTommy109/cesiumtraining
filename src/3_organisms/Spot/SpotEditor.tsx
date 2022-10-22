import {FC, Fragment} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {LinkImageInput} from '2_molecules/infobox/LinkImageInput'
import {useLocationItem} from 'controller/useVisualItem'
import {CASHKEY, useSpotItem} from './useSpotItem'

const COLORS = ['black', 'gray', 'red', 'pink', 'blue', 'green', 'yellow', 'white']
interface Props {
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({spot}) => {
  const {changeLocation} = useLocationItem(CASHKEY)
  const {pushLink} = useSpotItem()
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)
  const addLink = (url:string):void => pushLink(spot.id, url)

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
      {spot.links.map(it =>
        <Fragment key={it}>
          <input type="radio" style={{display: 'none'}} />
          <img src={it} style={{width: '80px', height: '60px'}} />
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
    <br />
    <textarea
      defaultValue = {spot.description}
      style = {{resize: 'vertical'}}
      rows = {20}
      cols = {56}
    />
  </>
}
