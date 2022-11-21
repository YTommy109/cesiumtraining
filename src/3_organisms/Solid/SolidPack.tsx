import {FC} from 'react'
import {Color} from 'cesium'
import {Solid} from '3_organisms/Solid/Solid'
import {useVisualItem} from 'controller/useVisualItem'

const CASHKEY:DataPack = 'pyramid'

const INIT_SOLID:CylinderItem|BoxItem = {
  id:          '',
  title:       '',
  location:    {lon: 139.77386052796396, lat: 35.68312191668824},
  screenState: {
    show:     true,
    selected: false
  },
  type:         'pyramid',
  slice:        4,
  topRadius:    0,
  bottomRadius: 0,
  length:       0,
  color:        Color.fromAlpha(Color.DARKRED, 0.6)
}

const init:Array<CylinderItem|BoxItem> = [{
  ...INIT_SOLID,
  id:           'BB60367D-68D9-4438-9CC5-875AEAFE98FD',
  title:        '東京タワー',
  description:  '# 東京タワー\n\n![東京タワー](https://jiyujin.me/wp-content/uploads/2021/08/tokyotower02-1280x720.jpg)\n\n東京の名所',
  location:     {lon: 139.74549727108362, lat: 35.65874610738962},
  topRadius:    50,
  bottomRadius: 200,
  length:       333,
  color:        Color.fromAlpha(Color.DARKRED, 0.6)
}, {
  ...INIT_SOLID,
  id:           '61E4B403-EBB2-459E-9500-5B8D30B2EB7E',
  title:        'スカイツリー',
  description:  '# スカイツリー\n\n![スカイツリー](https://jiyujin.me/wp-content/uploads/2021/08/skytree-1536x1152.jpg)\n\n東京の新名所',
  location:     {lon: 139.8107587972221, lat: 35.71026611766915},
  topRadius:    50,
  bottomRadius: 200,
  length:       300,
  color:        Color.fromAlpha(Color.SKYBLUE, 0.6)
}, {
  ...INIT_SOLID,
  id:          '76dd6e8b-c476-48f6-a20f-5e9ace79ad7f',
  title:       'あべのハルカス',
  description: '# 日本で三番目に高い建物。\n\n![あべのハルカス](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Abeno_Harukas_Osaka_Japan01-r.jpg/800px-Abeno_Harukas_Osaka_Japan01-r.jpg)',
  type:        'box',
  location:    {lon: 135.51347320757205, lat: 34.646282994111054},
  width:       100,
  depth:       280,
  heading:     45,
  length:      634,
  color:       Color.fromAlpha(Color.SKYBLUE, 0.6)
}]

export const SolidPack:FC = () => {
  const {data:solids} = useVisualItem<SolidItem>(CASHKEY, init)

  return <>
    {solids.map(it =>
      <Solid
        key     = {it.id}
        cashkey = {CASHKEY}
        item    = {it}
      />
    )}
  </>
}
