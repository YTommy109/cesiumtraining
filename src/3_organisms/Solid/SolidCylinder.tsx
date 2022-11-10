import {FC} from 'react'
import {Cartesian3, HeightReference, ShadowMode} from 'cesium'
import {Entity, EntityDescription} from 'resium'
import {SolidInfoBox} from './SolidInfoBox'

type Props = {
  cashkey:DataPack
  item:SolidItem
}
export const SolidCylinder:FC<Props> = ({cashkey, item}) =>
  <Entity
    name        = {item.title}
    position    = {Cartesian3.fromDegrees(item.location.lon, item.location.lat)}
    cylinder    = {{
      topRadius:       item.topRadius,
      bottomRadius:    item.bottomRadius,
      length:          item.length,
      material:        item.color,
      slices:          item.slice,
      heightReference: HeightReference.CLAMP_TO_GROUND,
      shadows:         ShadowMode.ENABLED
    }}
  >
    {item.description &&
      <EntityDescription>
        <SolidInfoBox
          cashkey         = {cashkey}
          pyramid         = {item}
          />
      </EntityDescription>
    }
  </Entity>
