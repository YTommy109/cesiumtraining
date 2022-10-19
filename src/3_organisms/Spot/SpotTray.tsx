import { FC } from 'react'
import { Spot } from '3_organisms/Spot/Spot'
import { SpotList } from './SpotList'
import { useDataList } from '2_molecules/DataList'

type Props = {
  spots:Spot[]
  changeLocation:(id:string, location:GeoLocation)=>void
}

const SpotsCollection:FC<Props> = ({spots, ...props}) =>
  <>
    {spots.map((it) =>
      <Spot
        key             = {it.id}
        spot            = {it}
        changeLocation  = {props.changeLocation}
      />
    )}
  </>

export const SpotTray:FC<Props> = ({spots, ...props}) => {
  const {dataListItems} = useDataList(spots.map(it => ({
    id:       it.id,
    title:    it.title,
    selected: true})
  ))

return <>
    <SpotList
      dataListItems = {dataListItems}
    />
    <SpotsCollection
      spots           = {spots}
      changeLocation  = {props.changeLocation}
    />
  </>
}
