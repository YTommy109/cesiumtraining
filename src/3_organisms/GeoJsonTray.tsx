import {FC} from 'react'
import {GeoJsonDataSource} from 'resium'

export const GeoJsonTray:FC = () =>
  <>
    <GeoJsonDataSource
      clampToGround = {true}
      data          = {'/sample.geojson'}
      show          = {true}
    />
  </>
