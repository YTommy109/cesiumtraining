import {FC, ChangeEventHandler, useId} from 'react'
import {LinkImageInput} from '2_molecules/infobox/LinkImageInput'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {useSpotItem} from '../useSpotItem'

interface Props {
  spot:SpotItem
}
export const ImageEditor:FC<Props> = ({spot}) => {
  const id = useId()
  const {pushLink, choseBillboard, setImageHeight, setImageScale} = useSpotItem()
  const addLink = (url:string):void => pushLink(spot.id, url)

  const clickImage:ChangeEventHandler<HTMLInputElement> = (e) =>
    choseBillboard(spot.id, parseInt(e.target.value))

  return <>
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
        label         = '高さ:'
        min           = {0}
        max           = {10000}
        value         = {spot.imageHeight}
        step          = {10}
        changeValue   = {(val:number):void => setImageHeight(spot.id, val)}
      />
      <RangeInput
        label         = '大きさ:'
        min           = {0.05}
        max           = {1}
        value         = {spot.imageScale}
        step          = {0.02}
        changeValue   = {(val:number):void => setImageScale(spot.id, val)}
      />
    </fieldset>
  </>
}
