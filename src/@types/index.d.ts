/// <reference types="vite-plugin-svgr/client" />

type DataListItem = {
  id:string,
  title:string,
  selected:boolean
}

type GeoRotation = {
  heading:number
  pitch:number
  roll:number
}

type GeoLocation = {
  lon:number
  lat:number
  height?:number
}

type Spot = {
  id:string
  title:string
  description:string
  location:GeoLocation
}

type Pyramid = {
  id:string
  name:string
  description?:string
  location:GeoLocation
  topRadius:number
  bottomRadius:number
  length:number
  color:Color
}
