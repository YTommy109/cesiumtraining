type DataPack   = 'plateau'|'curry'|'hotel'|'pyramid'|''
type PickMode   = 'single'|'multiple'
type SolidType  = 'pyramid'|'cylinder'|'box'

type LonLat = {
  lon:number
  lat:number
}
type AreaBox = {
  west:number
  east:number
  north:number
  south:number
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

type ScreenState = {
  show:boolean          // 表示状態
  selected:boolean      // 選択候補状態 (リスト上で選択)
  active?:boolean        // 選択状態 (地図上で選択)
  focuse?:boolean        // 焦点状態 (*予約)
}
interface VisualItem {
  id:string
  title:string
  description?:string
  screenState:ScreenState
}

interface LocationItem extends VisualItem {
  location:GeoLocation
  terrainHeight?:number
}

interface SpotItem extends LocationItem {
  links:string[]          // 画像リンク集
  keylink:number|null     // リンクのうち地図表示で使うもの
  bgColor:string          // ラベル背景色 (css カラー文字列)
  labelHeight:number      // ラベルの高さ
  labelScale:number       // ラベルの大きさ
  imageHeight:number      // 画像位置の高さ
  imageScale:number       // 画像の大きさ
}

interface PlateauStream extends VisualItem {
  id:string               // ID
  cityCode:string         // 地域コード
  dataType:string         // データタイプ
  url:string              // URL
  cityInfo:CityInfo       // 地域情報
  texture:boolean         // テクスチャー
  lowResolution:boolean   // 低解像度テクスチャー
}

interface SolidItem extends LocationItem {
  type:SolidType
  length:number         // 建物長さ (高さ)
  color:Color
}
interface CylinderItem extends SolidItem {
  slice:number
  topRadius:number
  bottomRadius:number
}

interface BoxItem extends SolidItem {
  width:number          // 幅
  depth:number          // 奥行き
  heading:number        // 進行方向
}

type CityInfo = {
  code:string             // 標準地域コード
  prefecture:string       // 都道府県
  city:string             // 政令市･郡･支庁･振興局等
  cityKana:string         // 政令市･郡･支庁･振興局等（ふりがな）
  town:string             // 市区町村
  townKana:string         // 市区町村（ふりがな）
}
