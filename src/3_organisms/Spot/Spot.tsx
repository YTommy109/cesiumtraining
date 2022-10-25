import {FC, useMemo} from 'react'
import {Cartesian2, Cartesian3, Color} from 'cesium'
import {PolylineCollection, Polyline, Entity, EntityDescription, BillboardGraphics} from 'resium'
import {SpotInfoBox} from './SpotInfoBox'

type Props = {
  spot:SpotItem
}
export const Spot:FC<Props> = ({spot}) => {
  const getGround = (location:GeoLocation):Cartesian3 =>
    Cartesian3.fromDegrees(location.lon, location.lat, 0)
  const getMidair = (location:GeoLocation, labelHeight:number=1000):Cartesian3 =>
    Cartesian3.fromDegrees(location.lon, location.lat, labelHeight)
  const padding   = useMemo(() => new Cartesian2(12, 12), [])

  return <>
    <Entity
      position  = {getGround(spot.location)}
      point     = {{
        pixelSize: 6
      }}
    />
    <PolylineCollection>
      <Polyline
        positions       = {[getGround(spot.location), getMidair(spot.location, spot.labelHeight)]}
      />
    </PolylineCollection>
    <Entity
      name        = {spot.title}
      position    = {getMidair(spot.location)}
    >
      {spot.keylink !== null && <BillboardGraphics
        image     = {spot.links[spot.keylink]}
        rotation  = {0}
        scale     = {0.1}
      />}
      <EntityDescription>
        <SpotInfoBox spot = {spot} />
      </EntityDescription>
    </Entity>
    <Entity
      name        = {spot.title}
      position    = {getMidair(spot.location, spot.labelHeight)}
      label       = {{
        text:              spot.title,
        scale:             spot.labelScale,
        backgroundColor:   Color.fromAlpha(Color.fromCssColorString(spot.bgColor), 0.5),
        showBackground:    true,
        backgroundPadding: padding
      }}
    />
  </>
}
