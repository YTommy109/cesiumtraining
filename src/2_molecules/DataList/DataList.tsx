import {FC} from 'react'
import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;

  tr.active {
    background-color: midnightblue;
  }
`

type Props = {
  dataListItems:VisualItem[]
}
export const DataList:FC<Props> = ({dataListItems, ...props}) =>
  <Table>
    <thead>
      <tr>
        <th>□</th>
        <th>No.</th>
        <th>ラベル</th>
      </tr>
    </thead>
    <tbody>
      {dataListItems.map((it, idx) =>
        <tr key={it.id} className={it.screenState?.selected ? 'active' : undefined}>
          <td>{it.screenState?.selected ? '■' : '□'}</td>
          <td>{idx + 1}</td>
          <td>{it.title}</td>
          <td>...</td>
        </tr>
      )}
    </tbody>
  </Table>
