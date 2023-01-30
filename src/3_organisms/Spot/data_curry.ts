const INIT_SPOT:SpotItem = {
  id:          '',
  title:       '',
  location:    {lon: 139.77386052796396, lat: 35.68312191668824},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [],
  imageHeight: 10,
  imageScale:  0.2,
  screenState: {
    show:     true,
    selected: false
  }
}

export const DATA_CURRY:SpotItem[] = [{
  ...INIT_SPOT,
  id:          'B9A77CAA-4995-493B-B20E-9FA4AE5CFEC3',
  title:       'wacca',
  description: '創作スパイスカレー部門グランプリに選ばれたこともある、出汁カレーの名店!!\n\n![wacca](https://pbs.twimg.com/media/FfFJ1bnX0AAhd_v?format=jpg&name=small)\n\nめちゃ美味しい\n\n[wacca](https://twitter.com/sekime_wacca)',
  location:    {lon: 139.77386052796396, lat: 35.68312191668824},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfkDbYWXoAAAcg7?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfFJ1bnX0AAhd_v?format=jpg&name=small',
    'https://pbs.twimg.com/media/FdUEpEcXoAAB8Ij?format=jpg&name=small',
    'https://pbs.twimg.com/media/FOxqs1bXIAAaH6p?format=jpg&name=small',
    'https://pbs.twimg.com/media/FL7-EhnXMAIzGys?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fi8rtvpXgAA-iN0?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fj6gK6AXoAA3KaA?format=jpg&name=small',
    'https://pbs.twimg.com/media/FkoZDKgXoAEV91P?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '8D73EEBB-DE25-4A7A-A596-0DD40D0DE49B',
  title:       'and Curry',
  description: '![and Curry 1](https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small)\n\nめちゃ美味しい\n\nターメリックミルクも落ち着く味わい\n\n![and Curry 2](https://pbs.twimg.com/media/FSiACdhXsAAbZGM?format=jpg&name=small)',
  location:    {lon: 139.65856919807263, lat: 35.664074212990144},
  keylink:     1,
  links:       [
    'https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small',
    'https://pbs.twimg.com/media/FYFHgdtXkAA9MPq?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSiACdhXsAAbZGM?format=jpg&name=small',
    'https://pbs.twimg.com/media/FPKIu18XEAAqXlb?format=jpg&name=small',
    'https://pbs.twimg.com/media/FOCrLatWYAsisz8?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNZeYSYX0AIasA9?format=jpg&name=small',
    'https://pbs.twimg.com/media/FLSSv_TX0BgxTVS?format=jpg&name=small',
    'https://pbs.twimg.com/media/FKpQB9magAAQWIk?format=jpg&name=small',
    'https://pbs.twimg.com/media/FkeUHc_WAAAF0kD?format=jpg&name=small',
    'https://pbs.twimg.com/media/FnSjaobXkAAEvhk?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '070C3493-FF81-43C0-B357-45E886BB4C54',
  title:       'プチシャニ',
  description: '![カレー1](https://pbs.twimg.com/media/FgIGfpFXoAEXGKT?format=jpg&name=small)\n\nとても美味しい南インドカレー屋さん。絶妙ななスパイスの調合で、マサラチャイまで美味しい。',
  location:    {lon: 139.75243705542388, lat: 35.650785359423615},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FgIGfpFXoAEXGKT?format=jpg&name=small',
    'https://pbs.twimg.com/media/FXmpeQgXgEEcQLC?format=jpg&name=small',
    'https://pbs.twimg.com/media/FPy5dCWXoAQThPP?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNjxi4dXMAAeJZm?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMb5CQNXMBMKb7T?format=jpg&name=small',
    'https://pbs.twimg.com/media/FKz2Y3-aAAAMWlP?format=jpg&name=small',
    'https://pbs.twimg.com/media/FJJem3QacAMIR2M?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'ECDC1324-A710-4FF7-B2CA-EDDA60A415F9',
  title:       'クリティカルホット',
  description: '![カレー1](https://pbs.twimg.com/media/FU9WERvXoAA6nKq?format=jpg&name=small)',
  location:    {lon: 139.3930653977504, lat: 35.58677263190765},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FWFBA_aWYAUlxwt?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfKTWf5XkAMgjkr?format=jpg&name=small',
    'https://pbs.twimg.com/media/FU9WERvXoAA6nKq?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'FDE690F6-A618-4E61-975B-F797DD28CF00',
  title:       'ヒマラヤンワルツ',
  description: '![カレー1](https://pbs.twimg.com/media/FLeT2VAXsAQyyFo?format=jpg&name=small)\n\nネパール在住経験のあるご夫婦がやってらっしゃる、本格スパイスカレー屋さん。地元丹波篠山の季節の食材を使った濃厚な味わいと、ゴロっとした大きい具材が転がっているのが特徴で、食感も楽しめる。\n\n![カレー2](https://pbs.twimg.com/media/FgSZmDKWYAAFVfK?format=jpg&name=small)\n\nキーマカレーは、肉の食感が残るようにお店で丁寧に粗挽きしてらっしゃって、めちゃ美味しい。',
  location:    {lon: 135.1380761112312, lat: 35.09803131867289},
  keylink:     1,
  links:       [
    'https://pbs.twimg.com/media/FgSZmDKWYAAFVfK?format=jpg&name=small',
    'https://pbs.twimg.com/media/FVnZyQ4WYAA8qoL?format=jpg&name=small',
    'https://pbs.twimg.com/media/FUYb_XQXEAACgys?format=jpg&name=small',
    'https://pbs.twimg.com/media/FZiB1aqWAAA4Exk?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSx3rTCXwAAtfcS?format=jpg&name=small',
    'https://pbs.twimg.com/media/FRkMgevWUAAmgtl?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNJz8rkX0AEBo_I?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMlVXI0XoAITZsP?format=jpg&name=small',
    'https://pbs.twimg.com/media/FLeT2VAXsAQyyFo?format=jpg&name=small',
    'https://pbs.twimg.com/media/FkO3eQ6XoAERJGc?format=jpg&name=small',
    'https://pbs.twimg.com/media/FkuMWm_WAAUuZaS?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'D39798BF-5CF7-4A9F-A330-FF4E413AA097',
  title:       'FISH',
  description: '',
  location:    {lon: 139.69822189590113, lat: 35.69667812876968},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FK94x_0aIAI_ZmE?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNOGpzGX0AEDlUy?format=jpg&name=small',
    'https://pbs.twimg.com/media/FL2jo1dWYBwsJNL?format=jpg&name=small',
    'https://pbs.twimg.com/media/FYPao33XwAEVYfU?format=jpg&name=small',
    'https://pbs.twimg.com/media/FTapBo5WUAApALr?format=jpg&name=small',
    'https://pbs.twimg.com/media/FQMpfn8XMAEgGEO?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNOGpzGX0AEDlUy?format=jpg&name=small',
    'https://pbs.twimg.com/media/FL2jo1dWYBwsJNL?format=jpg&name=small',
    'https://pbs.twimg.com/media/FK94x_0aIAI_ZmE?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fme1pT-X0AISfe-?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'E033FA83-12A3-4738-9424-770FC8D1AEA8',
  title:       '点と線',
  description: '',
  location:    {lon: 139.66599069590026, lat: 35.66511591007103},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Ff9zSYLWQAAfKHU?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fd4Hn7ZWIAEdqwK?format=jpg&name=small',
    'https://pbs.twimg.com/media/FWJ8tedXkAAMdCM?format=jpg&name=small',
    'https://pbs.twimg.com/media/FiTC79nXEAAWTzk?format=jpg&name=small',
    'https://pbs.twimg.com/media/FniAa8rWIAATprQ?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '77A40ECC-482C-4444-B780-39A00ED83CE8',
  title:       'ヨナナ',
  description: '',
  location:    {lon: 135.44761734006298, lat: 34.92380330528131},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FehUUyzWYAAEed4?format=jpg&name=small',
    'https://pbs.twimg.com/media/FStJknqWUAgzB0C?format=jpg&name=small',
    'https://pbs.twimg.com/media/FLXcbE1XsAEAYwv?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '8CBC4082-CCE2-480B-BD33-F945C2C8D2A0',
  title:       'ドラマチックカレー',
  description: '',
  location:    {lon: 135.50662119958182, lat: 34.70760651639344},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FehGtHmWQAYwnIF?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '77D20667-98DE-4280-A61A-7B8C480265F6',
  title:       '心',
  description: '',
  location:    {lon: 139.66856134193216, lat: 35.663590697437954},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FeMuCHtX0AAXrEn?format=jpg&name=small',
    'https://pbs.twimg.com/media/FW9PCk7WQAE32N9?format=jpg&name=small',
    'https://pbs.twimg.com/media/FVq1e1ZWUAA2-mD?format=jpg&name=small',
    'https://pbs.twimg.com/media/FT-sNTbWIAAAPNZ?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '4C6271CB-007E-4E35-854B-5BFF348262C2',
  title:       '狛犬珈琲',
  description: '珈琲のお店なのに、抜群のスパイスカレーを出してくれる。\n\n![カレー](https://pbs.twimg.com/media/FeHWrXTWAAIAumQ?format=jpg&name=small)\n\n[狛犬珈琲](https://komainu-coffee.com/)',
  location:    {lon: 139.66634188240832, lat: 35.66493182777607},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FeHWrXTWAAIAumQ?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '77c866e8-d656-4c80-ba03-72120f1b1315',
  title:       '犬拳堂',
  description: '100倍激辛のメニューがあったりするお店。最近、リニューアルオープンしたっぽい。\n\n![カレー](https://pbs.twimg.com/media/FcMMFOgWYAEZdxN?format=jpg&name=small)\n\n[犬拳堂](https://twitter.com/inukendou/)',
  location:    {lon: 139.66711776923717, lat: 35.66448679514488},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FcMMFOgWYAEZdxN?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'DDBF3EB3-9472-4216-85ED-F79E8105FF2D',
  title:       'Rato Mato',
  description: 'ネパール窯料理のお店。\n\n![ビリヤニ](https://pbs.twimg.com/media/FdzL6NMXgAEjH18?format=jpg&name=small)\n\nパイ生地のようなもので包まれたビリヤニ。\n\n[Rato Mato](https://tabelog.com/tokyo/A1304/A130404/13263740/)',
  location:    {lon: 139.69865656687753, lat: 35.704908215390965},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FdzL6NMXgAEjH18?format=jpg&name=small',
    'https://pbs.twimg.com/media/FXWxPeJWQAUgYVh?format=jpg&name=small',
    'https://pbs.twimg.com/media/FVBowmlXwAc55Ao?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '8B0E6DE7-7B07-44DF-833B-8834D71C4150',
  title:       'カリカリスパイス',
  description: '渋谷神泉の創作スパイスカレー屋さん。ランチは週替わりでいつも美味しい。\n\n![あいがけカレー](https://pbs.twimg.com/media/FgXjRhjXkAAPjgK?format=jpg&name=small)\n\n[カリカリスパイス](https://www.instagram.com/karikari.spice/)',
  location:    {lon: 139.69327758240797, lat: 35.65610445838015},
  keylink:     4,
  links:       [
    'https://pbs.twimg.com/media/FgXjRhjXkAAPjgK?format=jpg&name=small',
    'https://pbs.twimg.com/media/FdOtTWjWIAADUwn?format=jpg&name=small',
    'https://pbs.twimg.com/media/FWAgpNrX0AAgzVg?format=jpg&name=small',
    'https://pbs.twimg.com/media/FTgpnY9XoAEM53l?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSD88q0XoAM91G5?format=jpg&name=small',
    'https://pbs.twimg.com/media/FN9hgLiXwAENsg7?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNdjbGaXwAMJeax?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMwD88oWYAAnuDQ?format=jpg&name=small',
    'https://pbs.twimg.com/media/FKfB_7PaUAAs7Zr?format=jpg&name=small',
    'https://pbs.twimg.com/media/FkY9IsvXkAEgMNX?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '12083FFB-E546-4D2D-A26F-D7637C96E605',
  title:       'アーガン',
  description: '',
  location:    {lon: 139.7024585689172, lat: 35.701678881125815},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fc_QfyiXEAAvYom?format=jpg&name=small',
    'https://pbs.twimg.com/media/FTVtMfiXsAYWJJY?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSXsVMlXoAIXFJQ?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSSi1OzWYAEiDRU?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '53745E8D-7241-4753-8A15-0C2244BB637B',
  title:       'シナモンガーデン',
  description: '',
  location:    {lon: 139.45073281124039, lat: 35.49986637459727},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fc6UqmJWIAAmhEU?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fap6WCWWIAEuYXo?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMQu_PkWYAMoIox?format=jpg&name=small',
    'https://pbs.twimg.com/media/FiOHM-GXEAEryaz?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'C2FE0D7F-B541-4AD5-99DF-15DE38AC930B',
  title:       'E-itou Cuury (エイトカレー)',
  description: '',
  location:    {lon: 139.6694246842601, lat: 35.66289728209556},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fb3KPgwXkAA7Ixd?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'FFC248E0-A41A-4DF5-9767-8C80541B6809',
  title:       'ピカンティ本店',
  description: '',
  location:    {lon: 141.34860035376533, lat: 43.07707320360107},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fbs29bZXoAEluQU?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '8eec3385-47c1-4a83-bb25-4f962940f871',
  title:       'SAVoY',
  description: '',
  location:    {lon: 141.34924118445312, lat: 43.07132042854252},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fbn7JqvWAAAXTM0?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'f63f6796-547e-4003-a038-7e148bdb9edc',
  title:       'イドコロネ',
  description: '',
  location:    {lon: 139.6825324842607, lat: 35.684297826703656},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fbi_PjyXgAIbaK8?format=jpg&name=small',
    'https://pbs.twimg.com/media/FUtQGsiX0AEJHqI?format=jpg&name=small',
    'https://pbs.twimg.com/media/FSc2BmJXEAA3pvB?format=jpg&name=small',
    'https://pbs.twimg.com/media/FNTd_tsWYAYo18u?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMqfBzwXMAIUGYt?format=jpg&name=small',
    'https://pbs.twimg.com/media/FLET6oJaQAAXFCr?format=jpg&name=small',
    'https://pbs.twimg.com/media/FitAsq8XwAAqPJW?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '6c56a270-f4b3-4dd8-9e82-93e143535a44',
  title:       'バンコクスパイス',
  description: '上品な味わいのタイ料理のお店。\n\n![マッサマンカレー](https://pbs.twimg.com/media/FbTUxBrXwAEqX3u?format=jpg&name=small)\n\n[バンコクスパイス](https://bangkokspice.owst.jp)',
  location:    {lon: 139.69657596116662, lat: 35.692736570173274},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FbTUxBrXwAEqX3u?format=jpg&name=small',
    'https://pbs.twimg.com/media/FYuUS4DX0AE2GL0?format=jpg&name=small',
    'https://pbs.twimg.com/media/FiDmLgVXEAA_u1X?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'ac0c48c9-f3f7-4632-b9e6-84fb04d46b55',
  title:       'マハラジャビリヤニ',
  description: '',
  location:    {lon: 139.67279608240833, lat: 35.66827758771439},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Faf037MXoAAaR_A?format=jpg&name=small',
    'https://pbs.twimg.com/media/FYq4h3GX0AASl7G?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'cee3cc4b-020d-4cdf-bf2e-854a18b69b70',
  title:       'MUNBAI',
  description: '',
  location:    {lon: 139.90285298241116, lat: 35.78492642473293},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FZo5aPoXwAAOQ7q?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '2530db74-61d7-4996-98d7-51b04853ad40',
  title:       'ルーとこめ',
  description: '月に一度しか営業してないレア度マックスのスパイスカレー屋さん。\n\n![カレー](https://pbs.twimg.com/media/FYZ7pSmWAAAPQe0?format=jpg&name=small)',
  location:    {lon: 135.23627872657426, lat: 35.07044310502344},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FYZ7pSmWAAAPQe0?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '6b8e1faa-801a-4edf-ab67-4d7df8ddc114',
  title:       '般°若',
  description: 'カレー好きの松尾貴史さんがプロデュースしたスパイスカレー屋さん。\n\n![カツカレー](https://pbs.twimg.com/media/FPtv63_WQAAZpWY?format=jpg&name=small)\n\n[般°若](http://www.pannya.jp)',
  location:    {lon: 139.66879531156678, lat: 35.66319149816798},
  keylink:     3,
  links:       [
    'https://pbs.twimg.com/media/FVvxa9jXoAAmXJ6?format=jpg&name=small',
    'https://pbs.twimg.com/media/FRLhcueXwAcy1MJ?format=jpg&name=small',
    'https://pbs.twimg.com/media/FPtv63_WQAAZpWY?format=jpg&name=small',
    'https://pbs.twimg.com/media/FnIQctoWQAUdMol?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '42bef7af-544a-4d88-9408-cc8e2437f988',
  title:       'ほなまた',
  description: '![盛り合わせカレー](https://pbs.twimg.com/media/FVnZxr6XsAEwgTz?format=jpg&name=small)',
  location:    {lon: 135.5031030284174, lat: 34.684417205470815},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FVnZxr6XsAEwgTz?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '5fd27b78-9d0d-474e-9ba9-ee0f0af90ff3',
  title:       '和魂印才たんどーる',
  description: 'インド料理をベースに､梅､ゴマ､根菜､昆布､乾物といった和素材を使ったカレー屋さん。\n\n![3種盛りカレー](https://pbs.twimg.com/media/Fix9tTFXkAEJwWK?format=jpg&name=small)\n\n[和魂印才たんどーる](https://tandoor1997.com/)',
  location:    {lon: 139.68548648426065, lat: 35.68487559641879},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FUPNm67WUAAs_hg?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fix9tTFXkAEJwWK?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'cbcf1cc7-dff8-4f80-a324-db95e2c85d49',
  title:       '初恋',
  description: '',
  location:    {lon: 139.69677358425994, lat: 35.65728194531521},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FUKRzHKWYAAfhx4?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMMOl0dXMAMEEEd?format=jpg&name=small',
    'https://pbs.twimg.com/media/FJcCENeaQAQ89lX?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '17ee64f4-e3ab-4abc-be06-2a949e494c1d',
  title:       '如春園',
  description: '',
  location:    {lon: 139.14377155541453, lat: 35.2474145040827},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FTp380pXsAAlz8c?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '8997c2fc-c90d-4db5-9448-f443264ca18d',
  title:       '青い鳥',
  description: '',
  location:    {lon: 139.6771016265884, lat: 35.679509874043106},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FTBG0RdX0AAqNPI?format=jpg&name=small',
    'https://pbs.twimg.com/media/FQHf6SdWQAAtcXE?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'c40e64dc-0618-4aa5-8a5e-af662a182c64',
  title:       'Roji Spice&',
  description: '',
  location:    {lon: 139.6645223824093, lat: 35.704905323880055},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FSNZK9tXwAExvR9?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'd3943b3d-dfdd-4712-ac47-4dc3c647b68c',
  title:       'バサノバ',
  description: 'グリーンカレーそば、トムヤムクンそばなど、個性的なラーメンのお店。\n\n![グリーンカレーソバ](https://pbs.twimg.com/media/FjLsjSLWAAAqYd-?format=jpg&name=small)\n\n[バサノバ](https://www.instagram.com/bassanovaramen/)',
  location:    {lon: 139.6602310247363, lat: 35.66388633034487},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FSIB8QfWUAEw1wY?format=jpg&name=small',
    'https://pbs.twimg.com/media/FjLsjSLWAAAqYd-?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'b2e7ec00-d853-45d7-adf6-b83700bf801a',
  title:       'カレーの惑星',
  description: '',
  location:    {lon: 139.66604891309612, lat: 35.66502264482388},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FPomRlUXMA0yDOU?format=jpg&name=small',
    'https://pbs.twimg.com/media/FO6P--EX0AAYtNZ?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'c4490015-1f27-49d3-93c4-f79d7d8529e1',
  title:       'ガルベストン',
  description: '',
  location:    {lon: 139.05809240309839, lat: 37.916043222066264},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FPU27CBWUAQX_Vy?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '022b367e-c3f7-4c10-a74d-9c4af551b81f',
  title:       'カレーノトリコ',
  description: '',
  location:    {lon: 139.7698287247369, lat: 35.69416072758817},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FPO2aahXsBItKm-?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'f621bced-d856-40c2-b040-a36d5097ddb9',
  title:       'リトルランカ',
  description: '',
  location:    {lon: 135.277178713076, lat: 34.80680533044404},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FORsdjyWUAMrjXX?format=jpg&name=small',
    'https://pbs.twimg.com/media/FMfwMWqXwAU5ytc?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'ed27663a-5a9c-4ede-aafc-06bd56ef7501',
  title:       '旧ヤム邸 シモキタ荘',
  description: '',
  location:    {lon: 139.66698999590014, lat: 35.65865364566663},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FM0I29CWYAQ7DTS?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'c7bbdec5-8058-4817-850c-2f3dd5e4cadd',
  title:       'きんもちカレー',
  description: 'シンプルなスパイスカレーで、辛さを自由にカスタマイズできるお店。\n\n![チキンカレー](https://pbs.twimg.com/media/FfUmrCZXoAEDtY8?format=jpg&name=small)\n\n[きんもちカレー](https://twitter.com/Ioq0HTLC9XjOoKU)',
  location:    {lon: 139.68978618457868, lat: 35.685312980933425},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfUmrCZXoAEDtY8?format=jpg&name=small',
    'https://pbs.twimg.com/media/FinpRJNXoAA8oJ6?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'dcd0b67a-dd58-4159-9658-9480e44c6e8c',
  title:       'ポニピリカ',
  description: '抜群に美味しいスープカレーのお店。\n\n![カレー](https://pbs.twimg.com/media/Fgcs0SrXoAEBSAz?format=jpg&name=small)',
  location:    {lon: 139.6694924710838, lat: 35.662691883235254},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fgcs0SrXoAEBSAz?format=jpg&name=small',
    'https://pbs.twimg.com/media/FhAwCO7WQAIwMjz?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fj_XZPRWQAAi_bu?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '01fc4937-cafc-47a1-be76-a18fcbb8be79',
  title:       'チャオサイゴンパリバール',
  description: 'アジアン屋台料理のお店。\n\n![グリーンカレー](https://pbs.twimg.com/media/FfzgNZdWYAc4Ofp?format=jpg&name=small)\n\n[チャオサイゴンパリバール](https://tabelog.com/tokyo/A1318/A131808/13270955/)',
  location:    {lon: 139.65841495826558, lat: 35.673006125159354},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfzgNZdWYAc4Ofp?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '8333deab-77f4-4404-938c-0b50c17f2b81',
  title:       'BAGBAG',
  description: 'スープカレーの本場。\n\n![カレー](https://pbs.twimg.com/media/Fgh2ZSsXgAAaZGt?format=jpg&name=small)\n\n[BAGBAG](https://bag-bag.jp/shop/minami1jou/)',
  location:    {lon: 141.33444902678045, lat: 43.057012351432824},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fgh2ZSsXgAAaZGt?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '22049eb5-c5e3-4d18-bace-d57b22e83618',
  title:       'Buzz curry',
  description: 'トマトソースのスープカリー。ほろほろチキンとゴロゴロ野菜が美味しい。\n\n![カレー](https://pbs.twimg.com/media/FgnAFwgXoAAbz40?format=jpg&name=small)\n\n[Buzz curry](https://tabelog.com/hokkaido/A0101/A010102/1008492/)',
  location:    {lon: 141.34137391514068, lat: 43.06131295809066},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FgnAFwgXoAAbz40?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '5280a579-3379-4813-b821-a174515399c8',
  title:       'カレーの店・八月',
  description: 'トマトソースのスープカリー。ほろほろチキンとゴロゴロ野菜が美味しい。\n\n![カレー](https://pbs.twimg.com/media/Fg7mZgkWAAAzkXP?format=jpg&name=small)\n\n[カレーの店・八月](https://8gatsu.thebase.in)',
  location:    {lon: 139.66760134053786, lat: 35.65967069124525},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fg7mZgkWAAAzkXP?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'a0165a85-48ca-4ff4-824d-355f6d21fb36',
  title:       'スープカレー GARAKU',
  description: '札幌では行列のできる人気店。\n\n![ジンギスカンと五種のキノコのスープカレー](https://pbs.twimg.com/media/FhLesG_WAAAZGs7?format=jpg&name=small)\n\n[SOUP CURRY GARAKU](http://s-garaku.com/shop-garaku/)',
  location:    {lon: 139.66647645389693, lat: 35.70978262478124},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FhLesG_WAAAZGs7?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '5af9a708-69df-4c74-a964-effca4f371e6',
  title:       'ポトフ料理 joie (ジョワ)',
  description: '熱々の鍋で提供されるポトフカレー。\n\n![ポトフカレー](https://pbs.twimg.com/media/FiYn_PnXEAEzY82?format=jpg&name=small)\n\nトリュフ香るスープも選べる。![きのこクリーン&生トリュフのポトフカレー](https://pbs.twimg.com/media/FjbJk9oWQAITlQX?format=jpg&name=small)\n\n[ポトフ料理 joie (ジョワ)](https://www.instagram.com/pot_au_feu_joie/)',
  location:    {lon: 139.71279540858623, lat: 35.688649495858826},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FiYn_PnXEAEzY82?format=jpg&name=small',
    'https://pbs.twimg.com/media/FjbJk9oWQAITlQX?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '90a10509-75f3-4305-8aeb-607f5e8df80f',
  title:       'ジャイヒンド',
  description: '元五星レストランのシェフがやってる北インドカレーのお店。\n\n![北インドカレー](https://pbs.twimg.com/media/FewxGbpWIAEdPRa?format=jpg&name=small)\n\n[ジャイヒンド](https://tabelog.com/tokyo/A1318/A131808/13044522/)',
  location:    {lon: 139.6676152710841, lat: 35.67435961480318},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FewxGbpWIAEdPRa?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'c38d79fa-7558-4bcc-b152-b2ed5fcf61f1',
  title:       'トルカリ高円寺店',
  description: 'ベンガル家庭料理のお店。\n\n![ビリヤニ](https://pbs.twimg.com/media/FbycGtaXkAIMiHs?format=jpg&name=small)\n\n[トルカリ高円寺店](https://twitter.com/torkarikouenji)',
  location:    {lon: 139.6492176134142, lat: 35.70620167274712},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FbycGtaXkAIMiHs?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'a2e68cba-1436-42ec-87d3-ec4b23ed6814',
  title:       'SpiceCurry Fifty',
  description: '個性的な味わいのスパイスカレー屋さん。\n\n![三種盛りカレー](https://pbs.twimg.com/media/FiiftcVWQAYp1Fx?format=jpg&name=small)\n\n[SpiceCurry Fifty](https://www.instagram.com/spicecurry_fifty/)',
  location:    {lon: 139.66744801156668, lat: 35.66026308717452},
  keylink:     1,
  links:       [
    'https://pbs.twimg.com/media/FiiftcVWQAYp1Fx?format=jpg&name=small',
    'https://pbs.twimg.com/media/FjWLMwwXEAEueFX?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'db927759-9f85-41d5-b753-ed1c9e1f98c0',
  title:       'フクモナ',
  description: 'ランチに美味しいカレーを提供しているカフェ。\n\n![キーマカレー](https://pbs.twimg.com/media/FjGwyCsWIAExjhJ?format=jpg&name=small)とってもキメの細かい挽肉を使った舌触りの滑らかなキーマカレー!\n\n[フクモナ](http://fukumona.com/)',
  location:    {lon: 135.23942672689333, lat: 34.834312912952875},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FjGwyCsWIAExjhJ?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '59d05971-3c83-442c-96b9-3c8507e5beea',
  title:       'タイ料理 Benjarong',
  description: 'タイ人が作る本場のタイ料理のお店。\n\n![グリーンカレー](https://pbs.twimg.com/media/Fjl4edcWIAE0Kzd?format=jpg&name=small)\n\n[タイ料理 Benjarong](https://tabelog.com/okinawa/A4703/A470404/47027332/)',
  location:    {lon: 127.73546984210724, lat: 26.2756056296556},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fjl4edcWIAE0Kzd?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '44857754-5bfe-4773-a5cd-95bcda627ecd',
  title:       '大阪マドラス22号店',
  description: '30種類のスパイスと4種類のフルーツを1週間かけて煮込んだ情熱カレーのお店。\n\n![大阪マドラスカレー](https://pbs.twimg.com/media/Fjvvo4qXoAA67yX?format=jpg&name=small)\n\n[大阪マドラス22号店](https://madrascurry.jp)',
  location:    {lon: 139.66848475389625, lat: 35.66293084904597},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fjvvo4qXoAA67yX?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'be10387b-3097-4172-8ca6-e2cf1a1f1c71',
  title:       '時計仕掛けのスパイス',
  description: 'ゴージャスな具に目を奪われる、こだわりの薬膳出汁カレーのお店。\n\n![三種盛り](https://pbs.twimg.com/media/FkEWQxTXoAA2Vzv?format=jpg&name=small)\n\n[薬膳出汁カレー時計仕掛けのスパイス](https://twitter.com/LC5pJakuAv3XDD4/)',
  location:    {lon: 139.77030965542497, lat: 35.69264185068271},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FkEWQxTXoAA2Vzv?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'ca3f9962-fe00-41da-a72a-c88f5d65f257',
  title:       'スパイスカレーまるせ',
  description: '古民家を改造したスパイスカレー屋さん。美味しいだけでなく、駅近で便利!!\n\n![三種盛り](https://pbs.twimg.com/media/Fky6HZ0WQAEsUcR?format=jpg&name=small)\n\n[スパイスカレーまるせ](https://www.currymaruse.com/)',
  location:    {lon: 135.496886755402, lat: 34.71190876820046},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fky6HZ0WQAEsUcR?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '5d480314-f33e-499a-84d5-05041c19bfe0',
  title:       'デリー銀座店',
  description: 'セブンイレブンのカレーフェスで再現されてたカシミールカレーの本家!!\n\n![二種盛り](https://pbs.twimg.com/media/FmkNGETWIAIhIUO?format=jpg&name=small)\n\n[デリー銀座店](https://www.delhi.co.jp/store/ginza.php)',
  location:    {lon: 139.76085352690788, lat: 35.67140057627135},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FmkNGETWIAIhIUO?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'bbc9416b-6379-48fd-a59d-eceb13da0f4f',
  title:       '46ma',
  description: '下北沢カレー王座決定戦2連覇を誇る 46ma の特製チキンカレー!!!\n\n![特製チキンカレー](https://pbs.twimg.com/media/FnNnojKXoAEwXFp?format=jpg&name=small)\n\n[46ma](https://www.46ma-simokitazawa.com/)',
  location:    {lon: 139.66945210001276, lat: 35.66172874767686},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FnNnojKXoAEwXFp?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'd19038d4-56e5-40a8-9b2f-f8cad98a00aa',
  title:       'MIZUTANI CURRY',
  description: 'まだ Google Map に載ってない (2023/01/26時点) 新しいスパイスカレー屋さん\n\n![三種盛り](https://pbs.twimg.com/media/FnYJO_zXoAAE18r?format=jpg&name=small)\n\n[MIZUTANI CURRY](https://www.instagram.com/mizutanicurry/)',
  location:    {lon: 139.6687837511837, lat: 35.663122036659374},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FnYJO_zXoAAE18r?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          '582c0d54-f490-4464-9411-f51389bb9eb9',
  title:       'スパイスカレー食堂 中野坂上店',
  description: 'スリランカ航空グループシェフ監修で、本場の味を再現するスリランカカレー屋さん。\n\n![ブラックポーク&パリップ](https://pbs.twimg.com/media/FnnJto7X0AACmSQ?format=jpg&name=small)\n\n[スパイスカレー食堂](https://www.spicecurrylabo.com/)',
  location:    {lon: 139.6797288557434, lat: 35.69765965260493},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FnnJto7X0AACmSQ?format=jpg&name=small'
  ]
}, {
  ...INIT_SPOT,
  id:          'b7d4e2d0-426f-45ae-968b-2166b496a50b',
  title:       'TOKYO SPICE CURRY 赤と黒',
  description: '下北沢では珍しいカシミールカレーが食べられる。\n\n![広島県産牡蠣の薬膳カレー](https://pbs.twimg.com/media/FnsFqE1XgAAftEh?format=jpg&name=small)\n\n[TOKYO SPICE CURRY 赤と黒](https://twitter.com/akakuro_curry/)',
  location:    {lon: 139.66818648457817, lat: 35.661321185095005},
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FnsFqE1XgAAftEh?format=jpg&name=small'
  ]
}]
