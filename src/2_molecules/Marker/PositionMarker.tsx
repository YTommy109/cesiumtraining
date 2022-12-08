import {FC, useState} from 'react'
import {Cartesian2, Cartesian3, Cartographic, ScreenSpaceEventType, Color, HeightReference, Ray, Math} from 'cesium'
import {ScreenSpaceEventHandler, ScreenSpaceEvent, Entity, useCesium, CesiumMovementEvent} from 'resium'
import {useSpotItem} from '3_organisms/Spot/useSpotItem'
import {useVisualItemUtil} from 'controller/useVisualItem'

/**
 * ポジションマーカー
 */
type Props = {
  cashkey:DataPack
}
export const PositionMarker:FC<Props> = ({cashkey}) => {
  const {camera, scene, globe} = useCesium()
  const [grand, setGrand] = useState<Cartesian3|null>(null)
  const {create} = useSpotItem(cashkey)
  const {pickLastItem} = useVisualItemUtil(cashkey)

  const size = (camera.getMagnitude() - 6371655) / 50

  const getMidair = (pos:Cartesian3):Cartesian3 => {
    const temp = Cartographic.fromCartesian(pos)
    return Cartesian3.fromRadians(temp.longitude, temp.latitude, temp.height + (camera.getMagnitude() - 6371655) / 10)
  }

  const locationFromCartesian3 = (pos:Cartesian3):GeoLocation => {
    const cg:Cartographic = Cartographic.fromCartesian(pos)
    return {lon: Math.toDegrees(cg.longitude), lat: Math.toDegrees(cg.latitude)}
  }

  const handleMove = (e:{position:Cartesian2}|{startPosition:Cartesian2, endPosition:Cartesian2}):void => {
    if ('endPosition' in e) {
      const ray:Ray|undefined = camera.getPickRay(e.endPosition)
      if (ray) {
        setGrand(globe.pick(ray, scene))
      } else {
        setGrand(null)
      }
    } else {
      setGrand(null)
    }
  }

  const handleClick = (e:CesiumMovementEvent):void => {
    if (grand) {
      create(locationFromCartesian3(grand))
      pickLastItem()
    }
  }

  return <>
    <ScreenSpaceEventHandler>
      <ScreenSpaceEvent
        action  = {handleMove}
        type    = {ScreenSpaceEventType.MOUSE_MOVE}
      />
    </ScreenSpaceEventHandler>
    {grand && <>
      <Entity
        name            = "Marker"
        position        = {grand}
        onClick         = {handleClick}
        ellipse         = {{
          semiMajorAxis:   size,
          semiMinorAxis:   size,
          material:        Color.fromAlpha(Color.BLACK, 0.7),
          fill:            true,
          outline:         true,
          outlineColor:    Color.fromAlpha(Color.WHITE, 0.5),
          heightReference: HeightReference.CLAMP_TO_GROUND,
          height:          0
        }}
        polyline        = {{
          positions: [grand, getMidair(grand)]
        }}
      />
    </>
    }
  </>
}
