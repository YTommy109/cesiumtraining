import {FC} from 'react'
import styled from 'styled-components'
import {LeftTopStyle} from '4_templates/AbsoluteStyle'
import {FaMinus, FaMountain, FaHotel, FaBoxes} from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/Md'

const Div = styled(LeftTopStyle)`
  top:                      80px;
  left:                     10px;
  width:                    30px;
  padding:                  0;
  margin:                   0;
  background-color:       darkblue;
  opacity:                  .7;
  color:                  gainsboro;
  border-radius:            6px;
  padding-left:             5px;

  &:hover {
    width:                  350px;
    transition:             all 0.2s ease-out;
  }
  ul {
    list-style:             none;
    padding:                3px;
    margin:                 0;
    overflow-y:             scroll;
    display:                grid;
    grid-template-columns:  30px repeat(4, 80px);
    align-items:            center;
  }

  li:nth-child(n + 2):hover {
    border-radius:          4px;
    background-color:     royalblue;
    color:                darkblue;
  }
`

type Props = {
  setPack:(v:DataPack) => void
}
export const DataPackTray:FC<Props> = ({setPack}) =>
  <Div>
    <ul>
      <li><FaBoxes /></li>
      <li onClick={() => setPack('')}>
        <FaMinus /> Clear
      </li>
      <li onClick={() => setPack('plateau')}>
        <FaMountain /> Plateau
      </li>
      <li onClick={() => setPack('curry')}>
        <MdOutlineFoodBank /> Curry
      </li>
      <li onClick={() => setPack('hotel')}>
        <FaHotel /> Hotel
      </li>
    </ul>
  </Div>
