import {FC} from 'react'
import {SceneMode, Camera, Rectangle, ShadowMode} from 'cesium'
import {Viewer, Scene, Sun} from 'resium'
import {plateauTerrain} from '1_atoms/plateauTerrain'
import {CameraMan} from '2_molecules/CameraMan'
import {CameraBar} from '2_molecules/CameraBar'
import {GeoJsonTray} from '3_organisms/GeoJsonTray'
import {SpotTray} from '3_organisms/Spot'
import {SolidTray} from '3_organisms/Solid'
import {PlateauTray} from '3_organisms/Plateau/PlateauTray'

Camera.DEFAULT_VIEW_FACTOR = 0
// 琵琶湖
// Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(135.92460238792643, 34.91313090322596, 136.024411617646, 35.45238197699286)
// 東京都
Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(139.2524418930718, 36.025751895388005, 140.39652372331867, 35.391734545911845)

const CesiumPanel:FC = () =>
  <>
    <Viewer
      shadows         = {true}
      terrainShadows  = {ShadowMode.RECEIVE_ONLY}
      full
    >
      <Scene
        mode            = {SceneMode.SCENE3D}
        terrainProvider = {plateauTerrain}
      />
      <CameraMan />
      <CameraBar />
      <Sun />
      <GeoJsonTray />
      <SpotTray />
      <SolidTray />
      <PlateauTray />
    </Viewer>
  </>

const App:FC = () => <CesiumPanel />

export default App
