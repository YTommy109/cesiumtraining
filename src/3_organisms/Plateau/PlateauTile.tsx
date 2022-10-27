import {FC} from 'react'
import {Cesium3DTileset} from 'cesium'
import {useCesium, Cesium3DTileset as Resium3DTileset} from 'resium'

type Props = {
  plateau:PlateauStream[]
}
export const PlateauTile:FC<Props> = ({plateau}) => {
  const {viewer} = useCesium()

  const handleReady = (tileset:Cesium3DTileset):void => viewer.zoomTo(tileset)

  return  <>
    {plateau.filter(it => it.show).map(it =>
      <Resium3DTileset
        key     = {it.id}
        url     = {it.url}
        onReady = {handleReady}
      />
    )}
  </>
}
