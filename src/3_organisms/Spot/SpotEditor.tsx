import {FC} from 'react'
import {LocationEntry} from '2_molecules/infobox/LocationEntry'
import {usePointItemUtil} from 'controller/useDataItem'

const CASHKEY = 'spot'
const COLORS = ['black', 'gray', 'red', 'pink', 'blue', 'green', 'yellow', 'white']
interface Props {
  spot:SpotItem
}
export const SpotEditor:FC<Props> = ({spot}) => {
  const {changeLocation} = usePointItemUtil(CASHKEY)
  const setLocation = (val:GeoLocation):void => changeLocation(spot.id, val)

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
      <input type="radio" style={{display: 'none'}} /><img src="https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small" style={{width: '80px', height: '60px'}} />
      <input type="radio" style={{display: 'none'}} /><img src="https://pbs.twimg.com/media/FYFHgdtXkAA9MPq?format=jpg&name=small" style={{width: '80px', height: '60px'}} />
      <input type="radio" style={{display: 'none'}} /><img src="https://pbs.twimg.com/media/FSiACdhXsAAbZGM?format=jpg&name=small" style={{width: '80px', height: '60px'}} />
      <input type="radio" style={{display: 'none'}} /><img src="https://pbs.twimg.com/media/FPKIu18XEAAqXlb?format=jpg&name=small" style={{width: '80px', height: '60px'}} />
      <input type="radio" style={{display: 'none'}} /><img src="https://pbs.twimg.com/media/FOCrLatWYAsisz8?format=jpg&name=small" style={{width: '80px', height: '60px'}} />
      <input type="radio" style={{display: 'none'}} /><img src="https://pbs.twimg.com/media/FNZeYSYX0AIasA9?format=jpg&name=small" style={{width: '80px', height: '60px'}} />
    </div>
    <br />
    <input type="file" />
    <br />
    <br />
    <textarea
      defaultValue = {spot.description}
      style = {{resize: 'vertical'}}
      rows = {20}
      cols = {55}
    />
  </>
}
