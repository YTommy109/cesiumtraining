import { FC } from 'react'
import styled from 'styled-components'
import { LeftTopStyle } from '4_templates/AbsoluteStyle'
import { DataList } from '2_molecules/DataList'

const ListPalet = styled(LeftTopStyle)`
  background-color: darkblue;
  padding:          8px; 
  opacity:          .7;
  color:            gainsboro;
`

type Props = {
  dataListItems:DataListItem[]
}
export const SpotList:FC<Props> = ({dataListItems, ...props}) =>
  <ListPalet>
    <details>
      <summary>カレー屋さん</summary>
      <DataList dataListItems={dataListItems} />
    </details>
  </ListPalet>
