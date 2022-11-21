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

export const DATA_HOSHINO:SpotItem[] = [{
  ...INIT_SPOT,
  id:          '76a7e3fd-a376-42b1-a153-b5035e3a1070',
  title:       '星のやロッジニセコ',
  description: '2026年秋開業予定\n\n![外観](https://pbs.twimg.com/media/Fe_4vLHUcAEZ72c?format=jpg&name=small)',
  location:    {lat: 42.86176327718125, lon: 140.69827276937798},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Fe_4vLHUcAEZ72c?format=jpg&name=small',
    'https://pbs.twimg.com/media/Fe_4vPUUYAIKXQk?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '39873ca2-7668-4972-b29d-53b49ba952af',
  title:       '星のや軽井沢',
  description: '谷の集落に滞在する\n\n![外観](https://pbs.twimg.com/media/Ffj97FpVUAAVmem?format=jpg&name=small)',
  location:    {lat: 36.358415624289954, lon: 138.59088761126088},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Ffj97FpVUAAVmem?format=jpg&name=small',
    'https://pbs.twimg.com/media/Ffj97FjVEAIYJc9?format=jpg&name=small',
    'https://pbs.twimg.com/media/FdyozXXUUAEJrYC?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '9d80f1fa-e0c6-48e3-908d-d769bb6f29e8',
  title:       '星のや東京',
  description: '世界都市東京によみがえる、塔の日本旅館\n\n![外観](https://pbs.twimg.com/media/FfZoqcEVIAAvI8L?format=jpg&name=small)\n\n![料理](https://pbs.twimg.com/media/FfZorV9XwAAMpuM?format=jpg&name=small)',
  location:    {lat: 35.68794071715263, lon: 139.76506848426078},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfZoqcEVIAAvI8L?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfZoqf-VsAAB40R?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfZoqneVIAIrfm0?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfZorV9XwAAMpuM?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '2883abb9-fc3e-4a08-a46a-bdc1df94fa79',
  title:       '星のや富士',
  description: '明日が分からない、丘陵のグランピング\n\n![外観](https://pbs.twimg.com/media/FgjBR8QacAIs90z?format=jpg&name=small)',
  location:    {lat: 35.52709796963663, lon: 138.7478929977489},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FgjBR8QacAIs90z?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '6312ccf4-74d7-4693-adc7-faf77cdde045',
  title:       '星のや京都',
  description: '嵐峡の地に建つ、水辺の私邸\n\n![外観](/data/星野リゾート/星のや/星のや京都.jpg)',
  location:    {lat: 35.01158051256883, lon: 135.67687528239296},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/星のや/星のや京都.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '18a74da2-42d4-47f6-a6b7-dc1cc6e42b0f',
  title:       '星のや沖縄',
  description: 'グスクの居館で、海とともに暮らす\n\n![外観](https://pbs.twimg.com/media/FedH1S1aYAE_uDJ?format=jpg&name=small)',
  location:    {lat: 26.418577710363717, lon: 127.7145060975641},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FedH1S1aYAE_uDJ?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '5903f5fd-a20f-42c9-8129-e4bf9538f921',
  title:       '星のや竹富島',
  description: 'ウツグミの島に楽土あり\n\n![外観](/data/星野リゾート/星のや/星のや竹富島.jpg)',
  location:    {lat: 24.32175024022157, lon: 124.09683983985809},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/星のや/星のや竹富島.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'b2e14cf0-b721-4bf1-8b5d-9f686c1e1da1',
  title:       '星のやバリ',
  description: '古来の精神が息づく、聖なる川に向かう集落\n\n![外観](https://pbs.twimg.com/media/Ffa69BQUUAAkCWN?format=jpg&name=small)',
  location:    {lat: -8.47633320291562, lon: 115.30232679559012},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Ffa69BQUUAAkCWN?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '6036a211-1ad0-4a0e-af55-8e3cb4929a6c',
  title:       '星のやグーグァン',
  description: '温泉渓谷の楼閣で、最上のまどろみを知る\n\n![外観](https://pbs.twimg.com/media/Ffa68_naAAEtB2Q?format=jpg&name=small)',
  location:    {lat: 24.205649980158547, lon: 121.01054384170823},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Ffa68_naAAEtB2Q?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'd0905ac0-9fdc-4ee6-901b-5274cb7124e1',
  title:       '界 ポロト',
  description: 'ポロト湖の懐にひたる、とんがり湯小屋の宿\n\n![外観](/data/星野リゾート/堺/堺%20ポロト.jpg)',
  location:    {lat: 42.56042398946827, lon: 141.36187147270658},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20ポロト.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'f09f7277-97c5-4cd5-ad63-f236a318f4e4',
  title:       '界 津軽',
  description: '津軽の四季と伝統文化に浸る\n\n![外観](/data/星野リゾート/堺/堺%20津軽.jpg)',
  location:    {lat: 40.51196464321742, lon: 140.57439814205435},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20津軽.jpg',
    'https://pbs.twimg.com/media/FfgErPJVUAEvJbr?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '17b32ea9-e7c9-497d-8544-f08a91941140',
  title:       '界 川治',
  description: '里山の知恵比べ、味比べ\n\n![外観](https://pbs.twimg.com/media/Ff4iM5yVUAAoLUs?format=jpg&name=small)',
  location:    {lat: 36.89652046225144, lon: 139.7107815247658},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/Ff4iM5yVUAAoLUs?format=jpg&name=small',
    'https://pbs.twimg.com/media/Ff4iMo1aEAAyqQJ?format=jpg&name=small',
    'https://pbs.twimg.com/media/Ff4iMuyaUAAbIPJ?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'e87e48b7-a9c9-4c4e-998a-bc46916d1211',
  title:       '界 鬼怒川',
  description: 'とちぎ民藝が光る木漏れ日の湯宿\n\n![外観](https://pbs.twimg.com/media/FexuXezaEAAmL6V?format=jpg&name=small)',
  location:    {lat: 36.82862374649061, lon: 139.7162253707961},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FexuXezaEAAmL6V?format=jpg&name=small',
    'https://pbs.twimg.com/media/FexuXeRagAAZZUt?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'ba21a244-68b0-4cf7-948a-6652e2f6c208',
  title:       '界 日光',
  description: '中禅寺湖の神秘にため息\n\n![外観](https://pbs.twimg.com/media/Feb1qevUoAAH3W1?format=jpg&name=small)',
  location:    {lat: 36.743221263531446, lon: 139.49770346733123},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     null,
  links:       [
    'https://pbs.twimg.com/media/Feb1qevUoAAH3W1?format=jpg&name=small',
    'https://pbs.twimg.com/media/Feb1qXdaUAARgxM?format=jpg&name=small',
    'https://pbs.twimg.com/media/Feb1qZTUYAAZqFz?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '4133d332-c930-4b0f-9a51-cdd979a89d5c',
  title:       '界 箱根',
  description: '寄木細工のように変幻自在\n\n![外観](/data/星野リゾート/堺/堺%20箱根.jpg)',
  location:    {lat: 35.22373905633729, lon: 139.08402689774184},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20箱根.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '1b497caf-648f-495c-abe3-248c89b7a3e7',
  title:       '界 仙石原',
  description: '内なる表現欲と出会う アトリエ温泉旅館\n\n![外観](/data/星野リゾート/堺/堺%20仙石原.jpg)',
  location:    {lat: 35.2624934474511, lon: 139.01206722472685},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20仙石原.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '46d3597c-4e3c-4111-a112-dc1d103e72c7',
  title:       '界 熱海',
  description: '再開業を目指し、改築中です\n\n![外観](/data/星野リゾート/堺/堺%20熱海.jpg)',
  location:    {lat: 35.113838538614814, lon: 139.08703062842733},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20熱海.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'b8afa518-342a-4c60-830e-02fb83bc6b3c',
  title:       '界 アンジン',
  description: 'マリンアンティークな空間で船旅気分\n\n![外観](/data/星野リゾート/堺/堺%20アンジン.jpg)',
  location:    {lat: 34.971745919845894, lon: 139.10101779773598},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20アンジン.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '58447aba-c245-4152-883b-d1d20d250098',
  title:       '界 伊東',
  description: '温泉づくし花暦の宿\n\n![外観](/data/星野リゾート/堺/堺%20伊東.jpg)',
  location:    {lat: 34.96897432706443, lon: 139.09146539958795},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20伊東.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'c4ad3ff5-8900-4e76-9d79-0fe51259369a',
  title:       '界 遠州',
  description: '湖畔に佇む宿ならではの解放感\n\n![外観](/data/星野リゾート/堺/堺%20伊東.jpg)\n\n![料理](https://pbs.twimg.com/media/FeskrwLUoAEVcPS?format=jpg&name=small)',
  location:    {lat: 34.76239758657763, lon: 137.6205067265671},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20伊東.jpg',
    'https://pbs.twimg.com/media/FeskrwLUoAEVcPS?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '4a5a20da-efb0-48ee-bbaa-029c6ff0500e',
  title:       '界 アルプス',
  description: '信州の贅沢な田舎を体感する温泉宿\n\n![外観](https://pbs.twimg.com/media/FfG9x_DVQAASCgj?format=jpg&name=small)',
  location:    {lat: 36.531850544642516, lon: 137.80754952475695},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfG9x_DVQAASCgj?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfG9x9DaAAA8Pn5?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfG9x9macAE7O_V?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfG9yAEVUAAb693?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'dea4b9c7-975f-4c74-94fd-9d90f856d472',
  title:       '界 松本',
  description: '音響抜群のロビーでコンサート\n\n![外観](/data/星野リゾート/堺/堺%20松本.jpg)',
  location:    {lat: 36.261941854428585, lon: 137.98856733824258},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20松本.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '225a27f9-27eb-4f8a-9173-e24aa940707f',
  title:       '界 加賀',
  description: '新しい感性が息づく加賀伝統の温泉宿\n\n![外観](/data/星野リゾート/堺/堺%20加賀.jpg)',
  location:    {lat: 36.288951881942424, lon: 136.3610060996189},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20加賀.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '84699b80-db99-41e1-a05a-352c3c948fa8',
  title:       '界 玉造',
  description: 'いにしえの湯と出雲文化を遊ぶ宿\n\n![外観](/data/星野リゾート/堺/堺%20玉造.jpg)',
  location:    {lat: 35.41903474989791, lon: 133.00865973399004},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20玉造.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '361e991e-bb8e-4b6a-8f97-6b860668559d',
  title:       '界 出雲',
  description: '灯台と水平線を望むお詣り支度の宿\n\n![外観](https://pbs.twimg.com/media/FfGUoiTUcAA6Jwd?format=jpg&name=small)',
  location:    {lat: 35.43359328036556, lon: 132.63111275767048},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfGUoiTUcAA6Jwd?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'fcc1a143-c3bb-4171-815a-287b3de0adf7',
  title:       '界 長門',
  description: '藩主を癒した温泉街で新しい雅を体験する\n\n![外観](/data/星野リゾート/堺/堺%20長門.jpg)',
  location:    {lat: 34.32795364403024, lon: 131.1731916553934},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20長門.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '4a50df3e-d1b8-4dcf-a6cb-68bddf9e8b08',
  title:       '界 別府',
  description: 'ドラマティック温泉街に逗留する\n\n![外観](/data/星野リゾート/堺/堺%20別府.jpg)',
  location:    {lat: 33.27958633713074, lon: 131.5074992093381},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20別府.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'd32c19a2-0f53-4f06-b7a9-cb07742c4417',
  title:       '界 由布院',
  description: '四季折々の棚田を感じる湯宿\n\n![外観](/data/星野リゾート/堺/堺%20湯布院.jpg)',
  location:    {lat: 33.289626034121895, lon: 131.35199214952473},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20湯布院.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'd7cb9bf4-813c-486b-a507-3d9fe0a78497',
  title:       '界 阿蘇',
  description: '火の国、水の国がもたらす神仙境\n\n![外観](/data/星野リゾート/堺/堺%20阿蘇.jpg)',
  location:    {lat: 33.08082284439345, lon: 131.19366072652954},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20阿蘇.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          'e51a83ba-cafc-470a-817d-57031d2bd2f8',
  title:       '界 雲仙',
  description: '地獄パワーにふれる、異国情緒の宿\n\n![外観](https://pbs.twimg.com/media/FfLePQ7VsAE6Q61?format=jpg&name=small)\n\n![部屋](https://pbs.twimg.com/media/FfLePb9UoAQHgo8?format=jpg&name=small)',
  location:    {lat: 32.741775627805026, lon: 130.26152716858584},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    'https://pbs.twimg.com/media/FfLePQ7VsAE6Q61?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfLePb9UoAQHgo8?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfLePbHVQAAQYu2?format=jpg&name=small',
    'https://pbs.twimg.com/media/FfLePTbVUAEZLHT?format=jpg&name=small'
  ],
  imageHeight: 10,
  imageScale:  0.2
}, {
  ...INIT_SPOT,
  id:          '9a1aa880-911e-418c-95da-8eb5b4489edc',
  title:       '界 霧島',
  description: '桜島をはるかに見渡し、湯浴み小屋でうるおう宿\n\n![外観](/data/星野リゾート/堺/堺%20霧島.jpg)',
  location:    {lat: 31.86794107276102, lon: 130.8711531669796},
  bgColor:     'black',
  labelHeight: 1000,
  labelScale:  0.4,
  keylink:     0,
  links:       [
    '/data/星野リゾート/堺/堺%20霧島.jpg'
  ],
  imageHeight: 10,
  imageScale:  0.2
}]
