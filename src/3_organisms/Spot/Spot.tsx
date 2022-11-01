import {FC, useMemo, useState} from 'react'
import {Cartesian2, Cartesian3, Color, HeightReference, VerticalOrigin, DistanceDisplayCondition, NearFarScalar} from 'cesium'
import {PolylineCollection, Polyline, Entity, EntityDescription, BillboardGraphics} from 'resium'
import {SpotInfoBox} from './SpotInfoBox'

type Props = {
  cashkey:DataPack
  spot:SpotItem
}
export const Spot:FC<Props> = ({cashkey, spot}) => {
  const [focus, setFocus] = useState<boolean>(false)

  const pntGrand:Cartesian3 = useMemo(() => {
    return Cartesian3.fromDegrees(spot.location.lon, spot.location.lat, 0)
  }, [spot.location])

  const pntLabel:Cartesian3 = useMemo(() => {
    return Cartesian3.fromDegrees(spot.location.lon, spot.location.lat, spot.labelHeight)
  }, [spot.location, spot.labelHeight])

  const pntImage:Cartesian3 = useMemo(() => {
    return Cartesian3.fromDegrees(spot.location.lon, spot.location.lat, spot.imageHeight)
  }, [spot.location, spot.imageHeight])

  const padding   = useMemo(() => new Cartesian2(12, 12), [])

  return <>
    <Entity
      position    = {pntGrand}
      point       = {{
        pixelSize: 6
      }}
    />
    <PolylineCollection>
      <Polyline
        positions = {[pntGrand, pntLabel]}
      />
    </PolylineCollection>
    <Entity
      id                = {spot.id}
      name              = {spot.title}
      position          = {pntImage}
      onMouseEnter      = {() => setFocus(true)}
      onMouseLeave      = {() => setFocus(false)}
    >
      {spot.keylink !== null && <BillboardGraphics
        image           = {spot.links[spot.keylink]}
        rotation        = {0}
        scale           = {focus ? spot.imageScale * 3 : spot.imageScale}
        heightReference = {HeightReference.RELATIVE_TO_GROUND}
        verticalOrigin  = {VerticalOrigin.BOTTOM}
        distanceDisplayCondition
                        = {new DistanceDisplayCondition(10, 5000)}
        scaleByDistance = {new NearFarScalar(20, 3.0, 5000, 0.1)}
      />}
      <EntityDescription>
        <SpotInfoBox
          cashkey       = {cashkey}
          spot          = {spot}
        />
      </EntityDescription>
    </Entity>
    <Entity
      name              = {spot.title}
      position          = {pntLabel}
      label             = {{
        text:              spot.title,
        scale:             spot.labelScale,
        backgroundColor:   Color.fromAlpha(Color.fromCssColorString(spot.bgColor), 0.5),
        showBackground:    true,
        backgroundPadding: padding
      }}
    />
  </>
}
