import {FC} from 'react'
import {Spot} from '3_organisms/Spot/Spot'
import {SpotList} from './SpotList'
import {useVisualItem} from 'controller/useVisualItem'
import {CASHKEY} from './useSpotItem'
import {SpotMarker} from './SpotMarker'

const init:SpotItem[] = [{
  id:          'B9A77CAA-4995-493B-B20E-9FA4AE5CFEC3',
  title:       'wacca',
  description: '# wacca\n\n![wacca](https://pbs.twimg.com/media/FfFJ1bnX0AAhd_v?format=jpg&name=small)\n\nめちゃ美味しい',
  location:    {lon: 139.77386052796396, lat: 35.68312191668824},
  bgColor:     'black',
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfkDbYWXoAAAcg7?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfFJ1bnX0AAhd_v?format=jpg&name=small',
    'https://pbs.twimg.com/media/FdUEpEcXoAAB8Ij?format=jpg&name=small'
  ]
}, {
  id:          '8D73EEBB-DE25-4A7A-A596-0DD40D0DE49B',
  title:       'and Curry',
  description: '# and Curry\n\n![and Curry 1](https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small)\n\nめちゃ美味しい\n\nターメリックミルクも落ち着く味わい\n\n![and Curry 2](https://pbs.twimg.com/media/FSiACdhXsAAbZGM?format=jpg&name=small)',
  location:    {lon: 139.65856919807263, lat: 35.664074212990144},
  bgColor:     'black',
  keylink:     1,
  links:       [
    'https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small',
    'https://pbs.twimg.com/media/FYFHgdtXkAA9MPq?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSiACdhXsAAbZGM?format=jpg&name=small',
    'https://pbs.twimg.com/media/FPKIu18XEAAqXlb?format=jpg&name=small',
    'https://pbs.twimg.com/media/FOCrLatWYAsisz8?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNZeYSYX0AIasA9?format=jpg&name=small'
  ]
}]

export const SpotTray:FC = () => {
  const {data:spots} = useVisualItem<SpotItem>(CASHKEY, init)

  return <>
    <SpotMarker />
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
