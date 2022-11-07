import {FC, ReactNode, useCallback} from 'react'
import styled from 'styled-components'
import {useCesium} from 'resium'
import {DataListPalet, DataListBox, DataListItem} from '1_atoms/DataList'
import {useSpotItem} from './useSpotItem'

const Span = styled.span`
  display:  inline-block;
  width:    100%;
`

type Props = {
  header:ReactNode
  cashkey:DataPack
  spots:SpotItem[]
}
export const SpotList:FC<Props> = ({header, cashkey, spots}) => {
  const {viewer} = useCesium()
  const {pickItem} = useSpotItem(cashkey)

  const selectItem = useCallback((id:string) => {
    pickItem(id)
    viewer.flyTo(viewer.entities.getById(id))
  }, [viewer, pickItem])

  return <DataListPalet title={header}>
    <DataListBox>
      {spots.map(it =>
        <DataListItem
          key         = {it.id}
          name        = "curry"
          value       = {it.id}
          pickItem    = {selectItem}
          pickMode    = 'single'
          checked     = {it.screenState.selected}
        >
          <Span>{it.title}</Span>
        </DataListItem>
      )}
    </DataListBox>
  </DataListPalet>
}
