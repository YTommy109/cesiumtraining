import { FC } from 'react'
import styled from 'styled-components'
import { RightBottomStyle } from '4_templates/AbsoluteStyle'
import { ReactComponent as CommpassIcon } from './icon/compass.svg'

const Div = styled(RightBottomStyle)<{direction:number}>`
  svg {
    transform: rotate(${(props) => -props.direction}deg);
  }
`

type Props = {
  direction:number
}
export const Compass:FC<Props> = ({direction}) =>
  <Div direction={direction}>
    <CommpassIcon />
  </Div>
