import {FC, useState} from 'react'
import styled from 'styled-components'
import {SceneMode, Camera, Rectangle, ShadowMode} from 'cesium'
import {Viewer, Scene, Sun} from 'resium'
import {plateauTerrain} from '1_atoms/plateauTerrain'
import {CameraMan} from '2_molecules/CameraMan'
import {CameraBar} from '2_molecules/CameraBar'
import {GeoJsonTray} from '3_organisms/GeoJsonTray'
import {SpotPack} from '3_organisms/Spot'
import {SolidPack} from '3_organisms/Solid'
import {PlateauPack} from '3_organisms/Plateau/PlateauPack'
import {LeftTopStyle} from '4_templates/AbsoluteStyle'
import {FaMinus, FaMountain, FaHotel, FaBoxes} from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/Md'

Camera.DEFAULT_VIEW_FACTOR = 0
// 琵琶湖
// Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(135.92460238792643, 34.91313090322596, 136.024411617646, 35.45238197699286)
// 東京都
Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(139.2524418930718, 36.025751895388005, 140.39652372331867, 35.391734545911845)

const ToolTray = styled(LeftTopStyle)`
  top:                      80px;
  left:                     10px;
  width:                    30px;
  padding:                  0;
  margin:                   0;
  background-color:       darkblue;
  opacity:                  .7;
  color:                  gainsboro;
  border-radius:            6px;
  padding-left:             5px;

  &:hover {
    width:                  350px;
    transition:             all 0.2s ease-out;
  }
  ul {
    list-style:             none;
    padding:                3px;
    margin:                 0;
    overflow-y:             scroll;
    display:                grid;
    grid-template-columns:  30px repeat(4, 80px);
    align-items:            center;
  }

  li:nth-child(n + 2):hover {
    border-radius:          4px;
    background-color:     royalblue;
    color:                darkblue;
  }
`

type DataPack = 'plateau'|'curry'|'hotel'|''

type Props = {
  setPack:(v:DataPack) => void
}
const DataSetTray:FC<Props> = ({setPack}) =>
  <ToolTray>
    <ul>
      <li><FaBoxes /></li>
      <li onClick={() => setPack('')}>
        <FaMinus /> Clear
      </li>
      <li onClick={() => setPack('plateau')}>
        <FaMountain /> Plateau
      </li>
      <li onClick={() => setPack('curry')}>
        <MdOutlineFoodBank /> Curry
      </li>
      <li onClick={() => setPack('hotel')}>
        <FaHotel /> Hotel
      </li>
    </ul>
  </ToolTray>

const CesiumPanel:FC = () => {
  const [pack, setPack] = useState<DataPack>('')

  const handleClick = (v:DataPack):void => setPack(v)

  return <>
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
      <DataSetTray setPack={handleClick}/>
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
