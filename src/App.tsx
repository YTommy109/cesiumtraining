import {FC, useState} from 'react'
import {SceneMode, Camera, Rectangle, ShadowMode} from 'cesium'
import {Viewer, Scene, Sun} from 'resium'
import {plateauTerrain} from '1_atoms/plateauTerrain'
import {CameraMan} from '2_molecules/CameraMan'
import {CameraBar} from '2_molecules/CameraBar'
import {PositionMarker} from '2_molecules/ClickMarker/PositionMarker'
import {GeoJsonTray} from '3_organisms/GeoJsonTray'
import {SpotPack} from '3_organisms/Spot'
import {SolidPack} from '3_organisms/Solid'
import {PlateauPack} from '3_organisms/Plateau/PlateauPack'
import {DataPackTray} from '3_organisms/DataPackTray'
import {EditModeTray} from '3_organisms/EditModeTray'

Camera.DEFAULT_VIEW_FACTOR = 0
// 琵琶湖
// Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(135.92460238792643, 34.91313090322596, 136.024411617646, 35.45238197699286)
// 東京都
Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(139.2524418930718, 36.025751895388005, 140.39652372331867, 35.391734545911845)

const CesiumPanel:FC = () => {
  const [pack, setPack] = useState<DataPack>('')

  const handleClick = (v:DataPack):void => setPack(v)

  return <>
    <Viewer
      shadows         = {true}
      terrainShadows  = {ShadowMode.RECEIVE_ONLY}
      full
      onMouseMove     = {(movement, target) => {
        console.log(movement)
        console.log(target)
      }}
    >
      <Scene
        mode            = {SceneMode.SCENE3D}
        terrainProvider = {plateauTerrain}
      />
      <CameraMan />
      <CameraBar />
      <Sun />
      <EditModeTray />
      <PositionMarker />
      <DataPackTray setPack={handleClick}/>
      {/* <GeoJsonTray /> */}
      {pack === 'curry' && <SpotPack cashkey="curry" />}
      {pack === 'hotel' && <SpotPack cashkey="hotel" />}
      {pack === 'plateau' && <PlateauPack />}
      <SolidPack />
    </Viewer>
  </>
}

const App:FC = () => <CesiumPanel />

export default App
