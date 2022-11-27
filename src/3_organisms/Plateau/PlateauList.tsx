import {FC, MouseEventHandler, ChangeEventHandler, useState, useCallback} from 'react'
import styled from 'styled-components'
import {DataListPalet, DataListBox, DataListItem} from '1_atoms/DataList'
import {Fit1fr20px} from '4_templates/Fit1fr20px'
import {usePlateauUtil} from './usePlateauUtil'
import {FaFilter, FaMountain} from 'react-icons/fa'
import {ModeChooser} from './ModeChooser'

const DATA_TYPE:Record<string, string> = {
  bldg:     '建築物',
  fld:      '洪水浸水想定区域',
  tsunami:  '津波',
  brid:     '橋',
  frn:      '都市設備',
  tran:     '道路',
  veg:      '植生',
  takashio: '高潮',
  naisui:   'naisui'
}

const TagBar = styled.div`
  white-space:            nowrap;
  overflow-x:             scroll;
  padding:                3px;
`
const TagButton = styled.button`
  font-size:              x-small;
`

const Item = styled.span`
  display:                grid;
  grid-template-columns:  80px 120px;
  background-color:       inherit;
  border-radius:          inherit;

  span {
    overflow:             hidden;
    white-space:          nowrap;
    text-overflow:        ellipsis;
  }
`

const Div = styled.div`
  display:                grid;
  grid-template-columns:  1fr 1fr 1fr 1fr;
`

type Props = {
  plateau:PlateauStream[]
}
export const PlateauList:FC<Props> = ({plateau}) => {
  const [tag, setTag] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')
  const {pickItem, toggleItem} = usePlateauUtil()
  const [pickMode, setPickMode] = useState<PickMode>('single')

  const handleTagClick:MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => setTag(e.currentTarget.value), [])

  const handleChangeFilter:ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setKeyword(e.target.value), [])

  const TitleBar:FC = () =>
    <Div>
      <FaMountain /> PLATEAU ({plateau.length}) <span>&nbsp;</span><ModeChooser value={pickMode} changeMode={setPickMode} />
    </Div>

  return <DataListPalet
    title = {<TitleBar />}
  >
    <TagBar>
      <TagButton
        onClick   = {() => setTag('')}
      >
        All
      </TagButton>
      {Object.entries(DATA_TYPE).map(([key, it]) =>
        <TagButton
          key     = {key}
          value   = {key}
          onClick = {handleTagClick}
        >
          {it}
        </TagButton>
      )}
    </TagBar>
    <Fit1fr20px>
      <input type="text" onChange={handleChangeFilter} />
      <FaFilter />
    </Fit1fr20px>
    <DataListBox>
      {plateau
        .filter(it => tag === '' ? true : tag === it.dataType)
        .filter(it => keyword === '' ? true : it.title.includes(keyword))
        .map(it =>
          <DataListItem key={it.id}
            name      = "plateau"
            value     = {it.id}
            checked   = {it.screenState.show}
            pickMode  = {pickMode}
            pickItem  = {(v) => pickMode === 'single' ? pickItem(v) : toggleItem(v)}
          >
            <Item>
              <span>{DATA_TYPE[it.dataType]}</span>
              <span>{it.title}</span>
            </Item>
          </DataListItem>
        )}
    </DataListBox>
  </DataListPalet>
}
