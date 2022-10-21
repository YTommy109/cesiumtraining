import { FC } from 'react'
import { Spot } from '3_organisms/Spot/Spot'
import { SpotList } from './SpotList'
import { useDataItem } from 'controller/useDataItem'

const CASHKEY = 'spot'

const init:SpotItem[] = [{
  id:           'B9A77CAA-4995-493B-B20E-9FA4AE5CFEC3',
  title:        'wacca',
  description:  '# wacca\n\n![wacca](https://pbs.twimg.com/media/FfFJ1bnX0AAhd_v?format=jpg&name=small)\n\nめちゃ美味しい',
  location:     {lon: 139.773860527963962, lat: 35.68312191668824},
  files:        []
}, {
  id:           '8D73EEBB-DE25-4A7A-A596-0DD40D0DE49B',
  title:        'and Curry',
  description:  '# and Curry\n\n![and Curry 1](https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small)\n\nめちゃ美味しい\n\nターメリックミルクも落ち着く味わい\n\n![and Curry 2](https://pbs.twimg.com/media/FSiACdhXsAAbZGM?format=jpg&name=small)',
  location:     {lon: 139.65856919807263, lat: 35.664074212990144},
  files:        []
}]

export const SpotTray:FC = () => {
  const {data:spots} = useDataItem<SpotItem>(CASHKEY, init)

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
