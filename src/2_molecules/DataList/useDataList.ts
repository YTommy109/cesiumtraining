import { useState } from 'react'

export const useDataList = (dataList:DataListItem[]=[]) => {
  const [dataListItems, setDataListItems] = useState<DataListItem[]>(dataList)
  const selectDataItem = (id:string):void => setDataListItems((state) => state.map(it => it.id === id ? {...it, selected: true} : it))
  const deselectDataItem = (id:string):void => setDataListItems((state) => state.map(it => it.id === id ? {...it, selected: false} : it))

  return {dataListItems, selectDataItem, deselectDataItem}
}
