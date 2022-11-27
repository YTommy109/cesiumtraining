import {FC, ComponentProps} from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width:                  100%;
  height:                 50vh;
  min-height:             300px;
  overflow-y:             scroll;

  ol {
    list-style:           none;
    padding:              0;
    width:                100%;
  }
`

type Props = ComponentProps<'ol'>
export const DataListBox:FC<Props> = ({children, ...props}) =>
  <Div>
    <ol {...props}>
      {children}
    </ol>
  </Div>
