import {FC} from 'react'
import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;

  tr.active {
    background-color: midnightblue;
  }

  .tooltips {
    position: relative;
    > div {
      display:        none;
      position:       absolute;
      padding:        4px;
      color:          #fff;
      border-radius:  5px;
      background:     #000;
      width:          100%;  
    }
    > div:before {
      content:        "";
      position:       absolute;
      top:            0px;
      left:           -14px;
      border:         15px solid transparent;
      border-top:     15px solid #000;
      margin-left:    -15px;
      transform:      rotateZ(90deg);
    }
    :hover > div {
      display:        inline-block;
      top:            0px;
      left:           115px;
    }
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
          <td className="tooltips">{it.title}<div>{it.title}</div></td>
          <td>...</td>
        </tr>
      )}
    </tbody>
  </Table>
