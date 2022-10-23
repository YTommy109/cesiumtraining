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

type ScreenState = {
  show:boolean          // 表示状態
  selected:boolean      // 選択候補状態 (リスト上で選択)
  active:boolean        // 選択状態 (地図上で選択)
  focuse:boolean        // 焦点状態 (*予約)
}
interface VisualItem {
  id:string
  title:string
  description?:string
  screenState?:ScreenState
}

interface LocationItem extends VisualItem {
  location:GeoLocation
}

interface SpotItem extends LocationItem {
  links:string[]        // 画像リンク集
  keylink:number|null   // リンクのうち地図表示で使うもの
  bgColor:string        // ラベル背景色 (css カラー文字列)
}

interface PyramidItem extends LocationItem {
  topRadius:number
  bottomRadius:number
  length:number
  color:Color
}
