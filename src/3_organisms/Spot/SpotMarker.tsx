import {FC, useState} from 'react'
import {Cartesian2, Cartesian3, Cartographic, Math, ScreenSpaceEventType, Color, HorizontalOrigin, HeightReference, KeyboardEventModifier} from 'cesium'
import {ScreenSpaceEventHandler, ScreenSpaceEvent, Entity, useCesium, PolylineCollection, Polyline} from 'resium'
import {useSpotItem} from './useSpotItem'
/**
 * クリックマーカー
 */
type Props = {
  cashkey:DataPack
}
export const SpotMarker:FC<Props> = ({cashkey}) => {
  const {camera, scene, globe} = useCesium()
  const [cartesian3, setCartesian3] = useState<Cartesian3|null>(null)
  const [timeoutID, setTimeoutID] = useState<ReturnType<typeof setTimeout> | null>(null)
  const {create} = useSpotItem(cashkey)

  const size = (camera.getMagnitude() - 6371655) / 20

  const getMidair = (pos:Cartesian3):Cartesian3 => {
    const temp = Cartographic.fromCartesian(pos)
    return Cartesian3.fromRadians(temp.longitude, temp.latitude, temp.height + (camera.getMagnitude() - 6371655) / 10)
  }

  const locationFromCartesian3 = (pos:Cartesian3):GeoLocation => {
    const cg:Cartographic = Cartographic.fromCartesian(pos)
    return {lon: Math.toDegrees(cg.longitude), lat: Math.toDegrees(cg.latitude)}
  }

  const handleShiftClick = (e:{position:Cartesian2} | {startPosition:Cartesian2, endPosition:Cartesian2}):void => {
    if ('position' in e) {
      const ray = camera.getPickRay(e.position)
      if (ray) {
        create(locationFromCartesian3(globe.pick(ray, scene)))
      }
    }
  }

  const handleClick = (e:{position:Cartesian2} | {startPosition:Cartesian2, endPosition:Cartesian2}):void => {
    timeoutID && clearTimeout(timeoutID)
    setTimeoutID(null)

    if ('position' in e) {
      const ray = camera.getPickRay(e.position)
      if (ray) {
        setCartesian3(globe.pick(ray, scene))
        const id = setTimeout(() => {
          setCartesian3(null)
          setTimeoutID(null)
        }, 3000)
        setTimeoutID(id)
      }
    }
  }

  return <>
    <ScreenSpaceEventHandler>
      <ScreenSpaceEvent
        action    = {handleClick}
        type      = {ScreenSpaceEventType.LEFT_CLICK}
      />
      <ScreenSpaceEvent
        action    = {handleShiftClick}
        modifier  = {KeyboardEventModifier.SHIFT}
        type      = {ScreenSpaceEventType.LEFT_CLICK}
      />
    </ScreenSpaceEventHandler>
    {cartesian3 && <>
      <Entity
        name      = "Click marker"
        position  = {getMidair(cartesian3)}
        label     = {{
          text:              'Shift+Click to create',
          scale:             0.4,
          backgroundColor:   Color.SKYBLUE,
          showBackground:    true,
          backgroundPadding: new Cartesian2(20, 20),
          horizontalOrigin:  HorizontalOrigin.CENTER
        }}
      >
      </Entity>
      <Entity
        name      = "Click marker"
        position  = {cartesian3}
        point     = {{pixelSize: 6}}
        ellipse   = {{
          height:          0,
          semiMajorAxis:   size,
          semiMinorAxis:   size,
          material:        Color.fromAlpha(Color.BLACK, 0.7),
          fill:            true,
          outline:         true,
          outlineColor:    Color.fromAlpha(Color.WHITE, 0.5),
          heightReference: HeightReference.RELATIVE_TO_GROUND

        }}
      />
      <PolylineCollection>
        <Polyline
          positions         = {[cartesian3, getMidair(cartesian3)]}
        />
      </PolylineCollection>
    </>
    }
  </>
}
