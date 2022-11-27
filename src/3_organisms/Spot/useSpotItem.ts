import {useCallback} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useQueryClient} from '@tanstack/react-query'

const pushArray = <T=string>(org:T[], link:T):T[] => [...org, link]

type ReturnSpotItem = {
  create:(location:GeoLocation) => void
  setTitle:(id:string, title:string) => void
  setDescription:(id:string, text:string) => void
  pushLink:(id:string, url:string) => void
  choseBillboard:(id:string, index:number) => void
  setBgColor:(id:string, color:string) => void
  setLabelHeight:(id:string, height:number) => void
  setLabelScale:(id:string, scale:number) => void
  setImageHeight:(id:string, height:number) => void
  setImageScale:(id:string, scale:number) => void
}
export const useSpotItem = (cashkey:DataPack):ReturnSpotItem => {
  const quetyClient = useQueryClient()

  const create = (location:GeoLocation):void => {
    quetyClient.setQueryData<SpotItem[]>([cashkey], (state) => {
      if (state == null) return []
      return [...state, {
        id:          uuidv4(),
        title:       '名称未設定',
        description: '# 名称未設定',
        location,
        links:       [],
        keylink:     null,
        bgColor:     'black',
        labelHeight: 100,
        labelScale:  0.5,
        imageHeight: 10,
        imageScale:  0.2,
        screenState: {
          show:     true,
          selected: false
        }
      }]
    })
  }

  const update = useCallback((id:string, callback:(state:SpotItem) => SpotItem):void => {
    quetyClient.setQueryData<SpotItem[]>([cashkey], (state) => {
      if (state == null) return []
      return state.map((it) =>
        it.id !== id
          ? it
          : callback(it)
      )
    })
  }, [cashkey, quetyClient])

  const setTitle = useCallback((id:string, title:string):void =>
    update(id, (state) => ({...state, title}))
  , [update])

  const pushLink = useCallback((id:string, url:string):void =>
    update(id, (state) => ({...state, links: pushArray(state.links, url)}))
  , [update])

  const choseBillboard = useCallback((id:string, index:number):void =>
    update(id, (state) => ({...state, keylink: index}))
  , [update])

  const setBgColor = useCallback((id:string, color:string):void =>
    update(id, (state) => ({...state, bgColor: color}))
  , [update])

  const setLabelHeight = useCallback((id:string, height:number):void =>
    update(id, (state) => ({...state, labelHeight: height}))
  , [update])

  const setLabelScale = useCallback((id:string, scale:number):void =>
    update(id, (state) => ({...state, labelScale: scale}))
  , [update])

  const setImageHeight = useCallback((id:string, height:number):void =>
    update(id, (state) => ({...state, imageHeight: height}))
  , [update])

  const setImageScale = useCallback((id:string, scale:number):void =>
    update(id, (state) => ({...state, imageScale: scale}))
  , [update])

  const setDescription = useCallback((id:string, text:string):void =>
    update(id, (state) => ({...state, description: text}))
  , [update])

  return {create, setTitle, setDescription, pushLink, choseBillboard, setBgColor, setLabelHeight, setLabelScale, setImageHeight, setImageScale}
}
