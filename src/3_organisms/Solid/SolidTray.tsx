import { FC } from 'react'
import { SolidPyramid } from '3_organisms/Solid/SolidPyramid'

type Props = {
  solids:Pyramid[]
  changeLocation:(id:string, location:GeoLocation)=>void
}

export const SolidTray:FC<Props> = ({solids, changeLocation}) =>
  <>
    {solids.map(it =>
      <SolidPyramid
        key             = {it.id}
        pyramid         = {it}
        changeLocation  = {changeLocation}
      />
    )}
  </>
