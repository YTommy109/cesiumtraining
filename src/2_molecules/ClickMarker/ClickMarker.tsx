import { FC, useState } from 'react'
import { Cartesian2, Cartesian3, Cartographic, ScreenSpaceEventType, Color, HorizontalOrigin, HeightReference } from "cesium"
import { ScreenSpaceEventHandler, ScreenSpaceEvent, Entity, useCesium, EllipseGraphics, PolylineCollection, Polyline, LabelCollection, Label } from "resium"

/**
 * クリックマーカー
 */
export const ClickMarker:FC = () => {
  const {camera, scene, globe} = useCesium()
  const [cartesian3, setCartesian3] = useState<Cartesian3|null>(null)
  const [timeoutID, setTimeoutID] = useState<ReturnType<typeof setTimeout>|null>(null)

  const size = (camera.getMagnitude() - 6371655) / 50
  const ssize = (camera.getMagnitude() - 6371655) / 200

  const getMidair = (pos:Cartesian3):Cartesian3 => {
    const temp = Cartographic.fromCartesian(pos)
    return Cartesian3.fromRadians(temp.longitude, temp.latitude, temp.height + (camera.getMagnitude() - 6371655) / 10)
  }

  const handleClick = (e: {position:Cartesian2} | {startPosition:Cartesian2; endPosition:Cartesian2} ): void => {
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
        action  = {handleClick}
        type    = {ScreenSpaceEventType.LEFT_CLICK}
      />
    </ScreenSpaceEventHandler>
    {cartesian3 && <>
      <Entity
        name      = ""
        position  = {cartesian3}
        selected  = {false}
      >
        <EllipseGraphics
          height        = {0}
          semiMajorAxis = {ssize}
          semiMinorAxis = {ssize}
          material      = {Color.fromAlpha(Color.BLACK, .1)}
          fill          = {true}
          outline       = {true}
          outlineColor  = {Color.fromAlpha(Color.WHITE, .7)}
          heightReference = {HeightReference.RELATIVE_TO_GROUND}
        />
      </Entity>
      <Entity
        name            = "Click marker1"
        position        = {cartesian3}
        >
        <EllipseGraphics
          height        = {0}
          semiMajorAxis = {size}
          semiMinorAxis = {size}
          material      = {Color.fromAlpha(Color.BLACK, .7)}
          fill          = {true}
          outline       = {true}
          outlineColor  = {Color.fromAlpha(Color.WHITE, .5)}
          heightReference = {HeightReference.RELATIVE_TO_GROUND}
        />
      </Entity>
      <LabelCollection>
        <Label
          position          = {getMidair(cartesian3)}
          text              = {'Mark'}
          scale             = {0.4}
          backgroundColor   = {Color.CRIMSON}
          showBackground    = {true}
          backgroundPadding = {new Cartesian2(10, 10)}
          horizontalOrigin  = {HorizontalOrigin.CENTER}
        />
      </LabelCollection>
      <PolylineCollection>
        <Polyline
          positions     = {[cartesian3, getMidair(cartesian3)]}
        />
      </PolylineCollection>
    </>
    }
  </>
}
