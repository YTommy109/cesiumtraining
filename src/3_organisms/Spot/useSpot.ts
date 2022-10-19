import { useQuery, useQueryClient } from '@tanstack/react-query'

const CASHKEY = 'spot'

const init:Spot[] = [{
  id:           'B9A77CAA-4995-493B-B20E-9FA4AE5CFEC3',
  title:        'wacca',
  description:  '# wacca\n\n![wacca](https://pbs.twimg.com/media/FfFJ1bnX0AAhd_v?format=jpg&name=small)\n\nめちゃ美味しい',
  location:     {lon: 139.773860527963962, lat: 35.68312191668824}
}, {
  id:           '8D73EEBB-DE25-4A7A-A596-0DD40D0DE49B',
  title:        'and Curry',
  description:  '# and Curry\n\n![and Curry](https://pbs.twimg.com/media/Fcvzw3aWYAAvYAk?format=jpg&name=small)\n\nめちゃ美味しい',
  location:     {lon: 139.65856919807263, lat: 35.664074212990144}
}]

export const useSpot = () => {
  const quetyClient = useQueryClient()
  const { data } = useQuery<Spot[], Error>(
    [CASHKEY],
    async () => init,
    {
      staleTime: Infinity
    }
  )

  const changeLocation = (id:string, location:GeoLocation):void => {
    quetyClient.setQueryData<Spot[]>([CASHKEY], (state) => state?.map((it) => it.id === id ? {...it, location: location} : it))
  }

  return {spots: data ?? [], changeLocation}
}
