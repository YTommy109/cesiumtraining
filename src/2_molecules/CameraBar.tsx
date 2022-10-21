import {FC, useState} from 'react'
import {Math} from 'cesium'
import {useCesium} from 'resium'
import {ActionButton} from '../1_atoms/ActionButton'
import {LeftTopStyle} from '../4_templates/AbsoluteStyle'

export const CameraBar:FC = () => {
  const {camera} = useCesium()
  const [orgPitch, setOrgPitch] = useState<number|null>(null)

  const cameraDown = ():void => {
    setOrgPitch(camera.pitch)
    camera.lookDown(Math.toRadians(90) + camera.pitch)
  }

  const cameraBack = ():void => {
    if (!orgPitch) return
    camera.lookDown(Math.toRadians(-90) - orgPitch)
    setOrgPitch(null)
  }

  return <LeftTopStyle>
    <ActionButton
      label         = "Ret"
      disabled      = {orgPitch === null}
      handleAction  = {cameraBack}
    />
    <ActionButton
      label         = "上"
      disabled      = {orgPitch !== null}
      handleAction  = {cameraDown}
      />
  </LeftTopStyle>
}
