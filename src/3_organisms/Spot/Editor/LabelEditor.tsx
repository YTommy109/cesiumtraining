import {FC, ChangeEventHandler, useId} from 'react'
import styled from 'styled-components'
import {Label} from '1_atoms/Label'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {PropertyEditor} from '4_templates/PropertyEditor'
import {useSpotItem} from '../useSpotItem'

const COLORS = ['black', 'gray', 'red', 'pink', 'blue', 'green', 'yellow', 'white']

const UlVertical = styled.ul`
  listStyle:  none;
  padding:    0;
`

interface Props {
  spot:SpotItem
}
export const LabelEditor:FC<Props> = ({spot}) => {
  const id = useId()
  const titleId = `${id}_title`
  const {setTitle, setBgColor, setLabelHeight, setLabelScale} = useSpotItem()
  const clickBgColor:ChangeEventHandler<HTMLInputElement> = (e) =>
    setBgColor(spot.id, e.target.value)

  return <fieldset>
    <legend>ラベル</legend>
    <UlVertical className="vertical">
      <li>
        <PropertyEditor>
          <Label htmlFor={titleId}>名前:</Label>
          <input id={titleId} type="text" maxLength={100} value={spot.title} onChange={(e) => setTitle(spot.id, e.target.value)} />
        </PropertyEditor>
      </li>
      <li>
        <PropertyEditor>
          <Label>色:</Label>
          <span  className="color_picker">
            {COLORS.map(it =>
            <span key={it}>
              <input id={`${id}_color_${it}`} type="radio" name="bgcolor" value={it} onChange={clickBgColor} checked={it===spot.bgColor} />
              <label htmlFor={`${id}_color_${it}`} style={{backgroundColor: it}}>
                &nbsp;&nbsp;&nbsp;
              </label>
            </span>
            )}
          </span>
        </PropertyEditor>
      </li>
      <li>
        <RangeInput
          label       = "高さ:"
          min         = {0}
          max         = {10000}
          value       = {spot.labelHeight}
          changeValue = {(height) => setLabelHeight(spot.id, height)}
        />
      </li>
      <li>
        <RangeInput
          label       = "大きさ:"
          min         = {0.1}
          max         = {8}
          step        = {0.1}
          value       = {spot.labelScale}
          changeValue = {(scale) => setLabelScale(spot.id, scale)}
        />
      </li>
    </UlVertical>
  </fieldset>
}
