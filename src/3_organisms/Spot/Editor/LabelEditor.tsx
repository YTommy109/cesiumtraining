import {FC, ChangeEventHandler, useId} from 'react'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {useSpotItem} from '../useSpotItem'

const COLORS = ['black', 'gray', 'red', 'pink', 'blue', 'green', 'yellow', 'white']

interface Props {
  spot:SpotItem
}
export const LabelEditor:FC<Props> = ({spot}) => {
  const id = useId()
  const {setTitle, setBgColor, setLabelHeight, setLabelScale} = useSpotItem()
  const clickBgColor:ChangeEventHandler<HTMLInputElement> = (e) =>
    setBgColor(spot.id, e.target.value)

  return <fieldset>
    <legend>ラベル</legend>
    <label htmlFor={`${id}_title`}>
      名前:
    </label>
    <input id={`${id}_title`} type="text" maxLength={100} value={spot.title} onChange={(e) => setTitle(spot.id, e.target.value)} />
    <div className="color_picker"><span>色:</span>
      {COLORS.map(it =>
      <span key={it}>
        <input id={`${id}_color_${it}`} type="radio" name="bgcolor" value={it} onChange={clickBgColor} checked={it===spot.bgColor} />
        <label htmlFor={`${id}_color_${it}`} style={{backgroundColor: it}}>
          &nbsp;&nbsp;&nbsp;
        </label>
      </span>
      )}
    </div>
    <RangeInput
      label       = "高さ:"
      min         = {0}
      max         = {10000}
      value       = {spot.labelHeight}
      changeValue = {(height) => setLabelHeight(spot.id, height)}
    />
    <RangeInput
      label       = "大きさ:"
      min         = {0.1}
      max         = {8}
      step        = {0.1}
      value       = {spot.labelScale}
      changeValue = {(scale) => setLabelScale(spot.id, scale)}
    />
  </fieldset>
}
