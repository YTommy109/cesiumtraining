import { useState } from 'react'
import { Color } from "cesium"

const data:Pyramid[] = [{
  id:           'BB60367D-68D9-4438-9CC5-875AEAFE98FD',
  name:         '東京タワー',
  description:  '# 東京タワー\n\n![東京タワー](https://jiyujin.me/wp-content/uploads/2021/08/tokyotower02-1280x720.jpg)\n\n東京の名所',
  location:     {lon:139.74549727108362, lat:35.65874610738962},
  topRadius:    50,
  bottomRadius: 200,
  length:       333,
  color:        Color.fromAlpha(Color.DARKRED, .6)
}, {
  id:           '61E4B403-EBB2-459E-9500-5B8D30B2EB7E',
  name:         'スカイツリー',
  description:  '# スカイツリー\n\n![スカイツリー](https://jiyujin.me/wp-content/uploads/2021/08/skytree-1536x1152.jpg)\n\n東京の新名所',
  location:     {lon:139.8107587972221, lat:35.71026611766915},
  topRadius:    50,
  bottomRadius: 200,
  length:       634,
  color:        Color.fromAlpha(Color.SKYBLUE, .6)
}]

export const useSolid = () => {
  const [solids, setSolids] = useState<Pyramid[]>(data)

  const changeLocation = (id:string, location:GeoLocation):void => {
    setSolids((state) => state.map((it) => it.id === id ? {...it, location: location} : it))
  }

  return {solids, changeLocation}
}
