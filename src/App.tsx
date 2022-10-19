import { SceneMode, Camera, Rectangle } from "cesium";
import { Viewer, Scene } from "resium"
import { GeoJsonPanel } from '1_atoms/GeoJsonPanel'
import { plateauTerrain } from '1_atoms/plateauTerrain'
import { CameraMan } from '2_molecules/CameraMan'
import { CameraBar } from '2_molecules/CameraBar'
import { ClickMarker } from '2_molecules/ClickMarker'
import { useSpot, SpotTray } from '3_organisms/Spot'
import { useSolid, SolidTray } from '3_organisms/Solid'

Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(138.6639149119039, 35.674570308151374, 140.6639149119039, 35.674570308151374);

const CesiumPanel = () => {
  const {spots, changeLocation: changeLocationMarkLocation} = useSpot()
  const {solids, changeLocation: changeSolidLocation} = useSolid()

  return <>
    <Viewer full>
      <Scene
        mode            = {SceneMode.SCENE3D}
        terrainProvider = {plateauTerrain}
      />
      <CameraMan />
      <CameraBar />
      <ClickMarker />
      <GeoJsonPanel
          disabled      = {false}
      />
      <SpotTray
        spots           = {spots}
        changeLocation  = {changeLocationMarkLocation}
      />
      <SolidTray
        solids          = {solids}
        changeLocation  = {changeSolidLocation}
      />
    </Viewer>
  </>
}

const App = () => <CesiumPanel />

export default App
