import {FC, ReactNode, useCallback} from 'react'
import styled from 'styled-components'
import {useCesium} from 'resium'
import {ListBox} from '1_atoms/ListBox'
import {ListItem} from '1_atoms/ListItem'
import {LeftTopStyle} from '4_templates/AbsoluteStyle'

const ListPalet = styled(LeftTopStyle)`
  top:                      120px;
  border-radius:            8px;
  background-color:       darkblue;
  padding:                  8px; 
  opacity:                  .7;
  color:                  gainsboro;
  font-size:                small;
`

type Props = {
  header:ReactNode
  spots:SpotItem[]
}
export const SpotList:FC<Props> = ({header, spots, ...props}) => {
  const {viewer} = useCesium()
  const selectItem = useCallback((id:string) => {
    viewer.flyTo(viewer.entities.getById(id))
  }, [viewer])

  return <ListPalet>
    <details open>
      <summary>
        {header}
      </summary>
      <ListBox>
        {spots.map(it =>
          <ListItem
            key         = {it.id}
            name        = "curry"
            value       = {it.id}
            selectItem  = {selectItem}
          >
            <span>{it.title}</span>
          </ListItem>
        )}
      </ListBox>
    </details>
  </ListPalet>
}
