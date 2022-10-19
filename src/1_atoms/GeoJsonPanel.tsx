import { FC } from 'react'
import { GeoJsonDataSource } from 'resium'

type Props = {
    disabled:boolean
}
export const GeoJsonPanel:FC<Props> = ({disabled}) => {
    if (disabled) return null
    return <>
        <GeoJsonDataSource
            clampToGround = {true}
            data = {'/sample.geojson'}
            show = {true}
        />
    </>
}
