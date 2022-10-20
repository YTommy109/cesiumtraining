import { FC } from 'react'
import styled from 'styled-components'
import { DataList } from '2_molecules/DataList'
import { LeftTopStyle } from '4_templates/AbsoluteStyle'

const ListPalet = styled(LeftTopStyle)`
  top:              80px;
  background-color: darkblue;
  padding:          8px; 
  opacity:          .7;
  color:            gainsboro;
`

type Props = {
  spots:SpotItem[]
}
export const SpotList:FC<Props> = ({spots, ...props}) =>
  <ListPalet>
    <details>
      <summary>カレー屋さん ({spots.length})</summary>
      <DataList dataListItems={spots} />
    </details>
  </ListPalet>
