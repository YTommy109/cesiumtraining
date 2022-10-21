import {FC, useState, useCallback} from 'react'
import {Math} from 'cesium'
import {Camera, useCesium} from 'resium'
import {Compass} from '../1_atoms/Compass'

export const CameraMan:FC = () => {
  const {camera} = useCesium()
  const [heading, setHeading] = useState<number>(0)

  const changeHeading = useCallback(() => {
    setHeading(Math.toDegrees(camera.heading))
  }, [])

  return <>
    <Camera
      percentageChanged = {0.2}
      onChange          = {changeHeading}
    />
      <Compass direction={heading} />
  </>
}
