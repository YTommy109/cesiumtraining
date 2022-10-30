import {FC, useCallback} from 'react'
import {Cesium3DTileset, Cesium3DTileStyle} from 'cesium'
import {useCesium, Cesium3DTileset as Resium3DTileset} from 'resium'

type Props = {
  plateau:PlateauStream[]
}
export const PlateauTile:FC<Props> = ({plateau}) => {
  const {viewer} = useCesium()

  const handleReady = useCallback(
    (tileset:Cesium3DTileset):void => viewer.flyTo(tileset), [viewer])

  const getTileStyle = useCallback((it:PlateauStream):Cesium3DTileStyle|undefined => {
    if (it.dataType !== 'fld') return
    return new Cesium3DTileStyle({
      color: 'color("darkturquoise", 0.7)'
    })
  }, [])

  return  <>
    {plateau.filter(it => it.show).map(it =>
      <Resium3DTileset
        key     = {it.id}
        url     = {it.url}
        onReady = {handleReady}
        style   = {getTileStyle(it)}
      />
    )}
  </>
}
