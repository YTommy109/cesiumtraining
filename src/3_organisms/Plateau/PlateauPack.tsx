import {FC} from 'react'
import {usePlateau} from './usePlateau'
import {PlateauList} from './PlateauList'
import {PlateauTile} from './PlateauTile'

export const PlateauPack:FC = () => {
  const {plateau} = usePlateau()

  return <>
    <PlateauList plateau={plateau} />
    <PlateauTile plateau={plateau} />
  </>
}
