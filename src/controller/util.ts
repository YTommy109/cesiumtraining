import {Cartographic, sampleTerrainMostDetailed} from 'cesium'
import {plateauTerrain} from '1_atoms/plateauTerrain'

export const calcTerrainHeights = async <T extends LocationItem = LocationItem>(locationItems:T[]):Promise<T[]> => {
  const positions:Cartographic[] = locationItems.map(it => Cartographic.fromDegrees(it.location.lon, it.location.lat))
  const ret:Cartographic[] = await sampleTerrainMostDetailed(plateauTerrain, positions)
  return locationItems.map((it, idx) => ({...it, terrainHeight: ret[idx].height}))
}
