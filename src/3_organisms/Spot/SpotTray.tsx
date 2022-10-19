import { FC } from 'react'
import { Spot } from '3_organisms/Spot/Spot'
import { SpotList } from './SpotList'
import { useDataList } from '2_molecules/DataList'
import { useSpot } from './useSpot'

export const SpotTray:FC = () => {
  const {spots} = useSpot()
  const {dataListItems} = useDataList(spots.map(it => ({
    id:       it.id,
    title:    it.title,
    selected: true})
  ))

  return <>
    <SpotList
      dataListItems = {dataListItems}
    />
    {spots.map((it) =>
      <Spot
        key   = {it.id}
        spot  = {it}
      />
    )}
  </>
}
