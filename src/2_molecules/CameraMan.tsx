import { useState } from 'react'
import { Math } from 'cesium'
import { Camera, useCesium } from "resium"
import { Compass } from '../1_atoms/Compass'

export const CameraMan = () => {
  const {camera} = useCesium()
  const [heading, setHeading] = useState<number>(0)

  return <>
    <Camera
      percentageChanged = {0.2}
      onChange          = {() => {
        setHeading(Math.toDegrees(camera.heading))
      }}
    />
      <Compass direction={heading} />
  </>
}
