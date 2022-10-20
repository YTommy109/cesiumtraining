import { FC, useMemo } from 'react'
import { Cartesian2, Cartesian3, Color } from "cesium"
import { PolylineCollection, Polyline, Entity, EntityDescription } from "resium"
import { SpotInfoBox } from './SpotInfoBox'

type Props = {
  spot:SpotItem
}
export const Spot:FC<Props> = ({spot, ...props}) => {
  const getGround = (location:GeoLocation):Cartesian3 =>
    Cartesian3.fromDegrees(location.lon, location.lat, 0)
  const getMidair = (location:GeoLocation) =>
    Cartesian3.fromDegrees(location.lon, location.lat, 1000)
  const padding   = useMemo(() => new Cartesian2(12, 12), [])

  return <>
    <Entity
      position  = {getGround(spot.location)}
      point     = {{
        pixelSize:  6
      }}
    />
    <Entity
      name        = {spot.title}
      position    = {getMidair(spot.location)}
      label       = {{
        text:               spot.title,
        scale:              0.4,
        backgroundColor:    Color.fromAlpha(Color.BLUE, 0.4),
        showBackground:     true,
        backgroundPadding:  padding
      }}
    >
    <EntityDescription>
      <SpotInfoBox spot = {spot} />
    </EntityDescription>
    </Entity>
    <PolylineCollection>
      <Polyline
        positions       = {[getGround(spot.location), getMidair(spot.location)]}
      />
    </PolylineCollection>
  </>
}
