import {FC, useMemo, useState} from 'react'
import {Cartesian2, Cartesian3, Color, HeightReference, VerticalOrigin, DistanceDisplayCondition, NearFarScalar} from 'cesium'
import {Entity, EntityDescription, BillboardGraphics} from 'resium'
import {SpotInfoBox} from './SpotInfoBox'
import {useVisualItemUtil} from 'controller/useVisualItem'

type Props = {
  cashkey:DataPack
  spot:SpotItem
}
export const Spot:FC<Props> = ({cashkey, spot}) => {
  const [focus, setFocus] = useState<boolean>(false)
  const {pickOne} = useVisualItemUtil(cashkey)

  const pntGrand:Cartesian3 = useMemo(() => {
    return Cartesian3.fromDegrees(spot.location.lon, spot.location.lat, spot.terrainHeight)
  }, [spot.location, spot.terrainHeight])

  const pntLabel:Cartesian3 = useMemo(() => {
    return Cartesian3.fromDegrees(spot.location.lon, spot.location.lat, spot.labelHeight)
  }, [spot.location, spot.labelHeight])

  const pntImage:Cartesian3 = useMemo(() => {
    return Cartesian3.fromDegrees(spot.location.lon, spot.location.lat, spot.imageHeight)
  }, [spot.location, spot.imageHeight])

  const padding   = useMemo(() => new Cartesian2(12, 12), [])

  return <>
    <Entity
      name              = {spot.title}
      position          = {pntImage}
      onMouseEnter      = {() => setFocus(true)}
      onMouseLeave      = {() => setFocus(false)}
      onClick           = {() => pickOne(spot.id)}
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
        eyeOffset       = {new Cartesian3(100.0, 0.0, 0.0)}
      />}
      <EntityDescription>
        <SpotInfoBox
          cashkey       = {cashkey}
          spot          = {spot}
        />
      </EntityDescription>
    </Entity>
    <Entity
      id                = {spot.id}
      name              = {spot.title}
      position          = {pntLabel}
      selected          = {spot.screenState.selected}
      label             = {{
        text:              spot.title,
        scale:             spot.screenState.selected ? spot.labelScale * 1.5 : spot.labelScale,
        backgroundColor:   Color.fromAlpha(Color.fromCssColorString(spot.bgColor), 0.5),
        showBackground:    true,
        backgroundPadding: padding
      }}
      point       = {{
        pixelSize:       10,
        color:           Color.fromAlpha(Color.fromCssColorString(spot.bgColor), 0.5),
        heightReference: HeightReference.CLAMP_TO_GROUND,
        outlineColor:    Color.WHITE,
        outlineWidth:    spot.screenState.selected ? 2 : 0
      }}
      polyline    = {{
        positions: [pntGrand, pntLabel],
        material:  Color.fromAlpha(Color.fromCssColorString(spot.bgColor), 0.5),
        width:     spot.screenState.selected ? 3 : 1
      }}
    >
      <EntityDescription>
        <SpotInfoBox
          cashkey       = {cashkey}
          spot          = {spot}
        />
      </EntityDescription>
    </Entity>
  </>
}
