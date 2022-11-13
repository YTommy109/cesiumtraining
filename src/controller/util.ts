import {Cartographic, sampleTerrainMostDetailed, Math, Camera, TerrainProvider} from 'cesium'

export const calcTerrainHeights = async <T extends LocationItem = LocationItem>(terrainProvider:TerrainProvider, locationItems:T[]):Promise<T[]> => {
  const positions:Cartographic[] = locationItems.map(it => Cartographic.fromDegrees(it.location.lon, it.location.lat))
  const ret:Cartographic[] = await sampleTerrainMostDetailed(terrainProvider, positions)
  return locationItems.map((it, idx) => ({...it, terrainHeight: ret[idx].height}))
}

export const getCameraBox = (camera:Camera):AreaBox => {
  const rect = camera.computeViewRectangle()
  return rect
    ? {
        west:  Math.toDegrees(rect.west),
        east:  Math.toDegrees(rect.east),
        north: Math.toDegrees(rect.north),
        south: Math.toDegrees(rect.south)
      }
    : {
        west:  -180,
        east:  180,
        north: 90,
        south: -90
      }
}
