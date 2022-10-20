import { FC } from 'react'
import { Cartesian3, HeightReference } from "cesium"
import { Entity, EntityDescription } from "resium"
import { SolidInfoBox } from './SolidInfoBox'

type Props = {
  pyramid:PyramidItem
}
export const SolidPyramid:FC<Props> = ({pyramid}) =>
  <Entity
    name        = {pyramid.name}
    position    = {Cartesian3.fromDegrees(pyramid.location.lon, pyramid.location.lat)}
    cylinder    = {{
      topRadius:        pyramid.topRadius,
      bottomRadius:     pyramid.bottomRadius,
      length:           pyramid.length,
      material:         pyramid.color,
      slices:           4,
      heightReference:  HeightReference.CLAMP_TO_GROUND
    }}
  >
    {pyramid.description &&
      <EntityDescription>
        <SolidInfoBox
          pyramid         = {pyramid}
          />
      </EntityDescription>
    }
  </Entity>
