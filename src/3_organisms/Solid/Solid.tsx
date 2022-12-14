import {FC, useMemo} from 'react'
import {Cartesian3, HeightReference, ShadowMode, Transforms, ConstantProperty, HeadingPitchRoll, Math} from 'cesium'
import {Entity, EntityDescription} from 'resium'
import {SolidCylinderInfoBox, SolidBoxInfoBox} from './SolidInfoBox'

type SolidProps = {
  cashkey:DataPack
  item:SolidItem
}
export const Solid:FC<SolidProps> = ({cashkey, item}) => <>
  {
    item.type === 'pyramid' && <SolidCylinder
      cashkey = {cashkey}
      item    = {item as CylinderItem}
      />
  }
  {
    item.type === 'cylinder' && <SolidCylinder
      cashkey = {cashkey}
      item    = {item as CylinderItem}
      />
  }
  {
    item.type === 'box' && <SolidBox
      cashkey = {cashkey}
      item    = {item as BoxItem}
      />
  }
</>

type CylinderProps = {
  cashkey:DataPack
  item:CylinderItem
}
export const SolidCylinder:FC<CylinderProps> = ({cashkey, item}) =>
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
        <SolidCylinderInfoBox
          cashkey      = {cashkey}
          item         = {item}
          />
      </EntityDescription>
    }
  </Entity>

type BoxProps = {
  cashkey:DataPack
  item:BoxItem
}
export const SolidBox:FC<BoxProps> = ({cashkey, item}) => {
  const position    = useMemo(() => Cartesian3.fromDegrees(item.location.lon, item.location.lat), [item.location])
  const orientation = useMemo(() => new ConstantProperty(
    Transforms.headingPitchRollQuaternion(
      position,
      new HeadingPitchRoll(Math.toRadians(item.heading), 0, 0))
  ), [position, item.heading])
  const dimensions = useMemo(() => new Cartesian3(item.width, item.depth, item.length), [item.width, item.depth, item.length])

  return <>
    <Entity
      name        = {item.title}
      position    = {position}
      orientation = {orientation}
      box         = {{
        dimensions,
        material:        item.color,
        heightReference: HeightReference.CLAMP_TO_GROUND,
        shadows:         ShadowMode.ENABLED
      }}
    >
      {item.description &&
        <EntityDescription>
          <SolidBoxInfoBox
            cashkey      = {cashkey}
            item         = {item}
            />
        </EntityDescription>
      }
    </Entity>
  </>
}
