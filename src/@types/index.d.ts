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

type FileItem = {
  id:string
  title:string
  url:string
}
interface DataItem {
  id:string
  title:string
  description?:string
  screenState?:ScreenState
}

  interface PointItem extends DataItem {
    location:GeoLocation
  }
  
    interface SpotItem extends PointItem {
      files:FileItem[]
    }

    interface PyramidItem extends PointItem {
      topRadius:number
      bottomRadius:number
      length:number
      color:Color
    }
