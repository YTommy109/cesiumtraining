import {FC} from 'react'
import {SceneMode, Camera, Rectangle} from 'cesium'
import {Viewer, Scene} from 'resium'
import {plateauTerrain} from '1_atoms/plateauTerrain'
import {CameraMan} from '2_molecules/CameraMan'
import {CameraBar} from '2_molecules/CameraBar'
import {ClickMarker} from '2_molecules/ClickMarker'
import {GeoJsonTray} from '3_organisms/GeoJsonTray'
import {SpotTray} from '3_organisms/Spot'
import {SolidTray} from '3_organisms/Solid'

Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(135.9091994686757, 37.65489776142851, 141.78139179481337, 34.99557096196444)

const CesiumPanel:FC = () =>
  <>
    <Viewer full>
      <Scene
        mode            = {SceneMode.SCENE3D}
        terrainProvider = {plateauTerrain}
      />
      <CameraMan />
      <CameraBar />
      <ClickMarker />
      <GeoJsonTray />
      <SpotTray />
      <SolidTray />
    </Viewer>
  </>

const App:FC = () => <CesiumPanel />

export default App
