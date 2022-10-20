import { FC } from 'react'
import { Spot } from '3_organisms/Spot/Spot'
import { SpotList } from './SpotList'
import { useSpot } from './useSpot'

export const SpotTray:FC = () => {
  const {spots} = useSpot()

  return <>
    <SpotList
      spots = {spots}
    />
    {spots.map((it) =>
      <Spot
        key   = {it.id}
        spot  = {it}
      />
    )}
  </>
}
