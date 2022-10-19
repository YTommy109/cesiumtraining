import { FC } from 'react'
import { SolidPyramid } from '3_organisms/Solid/SolidPyramid'
import { useSolid } from './useSolid'

export const SolidTray:FC = () => {
  const {solids} = useSolid()

  return <>
    {solids.map(it =>
      <SolidPyramid
        key     = {it.id}
        pyramid = {it}
      />
    )}
  </>
}
