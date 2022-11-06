import {FC, ReactNode, useCallback} from 'react'
import styled from 'styled-components'
import {useCesium} from 'resium'
import {DataListPalet, DataListBox, DataListItem} from '1_atoms/DataList'

const Span = styled.span`
  display:  inline-block;
  width:    100%;
`

type Props = {
  header:ReactNode
  spots:SpotItem[]
}
export const SpotList:FC<Props> = ({header, spots}) => {
  const {viewer} = useCesium()
  const selectItem = useCallback((id:string) => {
    viewer.flyTo(viewer.entities.getById(id))
  }, [viewer])

  return <DataListPalet title={header}>
    <DataListBox>
      {spots.map(it =>
        <DataListItem
          key         = {it.id}
          name        = "curry"
          value       = {it.id}
          pickItem  = {selectItem}
        >
          <Span>{it.title}</Span>
        </DataListItem>
      )}
    </DataListBox>
  </DataListPalet>
}
