import { Cartesian3, Color } from "cesium";
import { CylinderGraphics, Entity, EntityDescription, LabelGraphics } from "resium"
import { InfoBox } from './infobox/InfoBox'

const DUMMY_LON = 139.6639149119039
const DUMMY_LAT = 35.674570308151374

export const EntityItem = () =>
  <Entity
    name            = {'名前プロパティは name'}
    position        = {Cartesian3.fromDegrees(DUMMY_LON, DUMMY_LAT, 200)}
    >
    <LabelGraphics
      text          = {"ラベルを置いてみる"}
    />
    <CylinderGraphics
      show          = {true}
      outline       = {true}
      material      = {Color.RED}
      topRadius     = {100}
      bottomRadius  = {100}
      length        = {100}
    />
    <EntityDescription>
      <InfoBox />
    </EntityDescription>
  </Entity>
