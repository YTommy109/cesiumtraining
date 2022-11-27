import {FC} from 'react'
import styled from 'styled-components'
import {LeftTopStyle} from '4_templates/AbsoluteStyle'
import {BsPinMapFill} from 'react-icons/bs'
import {FaMousePointer} from 'react-icons/fa'
import {BiCylinder} from 'react-icons/bi'

const Div = styled(LeftTopStyle)`
  top:                      60px;
  left:                     10px;
  width:                    100px;
  padding:                  0;
  margin:                   0;
  background-color:       darkblue;
  opacity:                  .7;
  color:                  gainsboro;
  border-radius:            6px;
  padding-left:             5px;

  ul {
    list-style:             none;
    padding:                3px;
    margin:                 0;
    overflow-y:             scroll;
    display:                grid;
    grid-template-columns:  repeat(4, 30px);
    align-items:            center;
  }
`

export const EditModeTray:FC = () =>
  <Div>
    <ul>
      <li>
        <FaMousePointer />
      </li>
      <li>
        <BsPinMapFill />
      </li>
      <li>
        <BiCylinder />
      </li>
    </ul>
  </Div>
