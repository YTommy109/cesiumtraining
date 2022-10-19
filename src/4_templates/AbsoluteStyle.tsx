import styled from 'styled-components'

const UILayer = styled.div`
  position:         absolute;
  z-index:          10;
`

export const LeftTopStyle = styled(UILayer)`
  left:             10px;
  top:              10px;
`

export const RightBottomStyle = styled(UILayer)`
  bottom:           40px;
  right:            20px;
`
