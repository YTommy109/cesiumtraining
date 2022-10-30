import {FC, MouseEventHandler, ChangeEventHandler, useState, useCallback} from 'react'
import styled from 'styled-components'
import {ListBox} from '1_atoms/ListBox'
import {ListItem} from '1_atoms/ListItem'
import {LeftTopStyle} from '4_templates/AbsoluteStyle'
import {Fit1fr20px} from '4_templates/Fit1fr20px'
import {usePlateauUtil} from './usePlateauUtil'
import {FaFilter, FaMountain} from 'react-icons/fa'

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
const ListPalet = styled(LeftTopStyle)`
  top:                      120px;
  width:                    200px;
  border-radius:            8px;
  background-color:         navy;
  padding:                  8px;
  opacity:                  .7;
  color:                    gainsboro;

  summary {
    opacity:                .9;
  }
`

const TagBar = styled.div`
  white-space:                nowrap;
  overflow-x:                 scroll;
  padding:                    3px;
`
const TagButton = styled.button`
  font-size:                  x-small;
`

const Item = styled.span`
  display:                    grid;
  grid-template-columns:      80px 120px;
  font-size:                  small;
`

type Props = {
  plateau:PlateauStream[]
}
export const PlateauList:FC<Props> = ({plateau}) => {
  const [tag, setTag] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')
  const {selectItem} = usePlateauUtil()

  const handleTagClick:MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => setTag(e.currentTarget.value), [])

  const handleChangeFilter:ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setKeyword(e.target.value), [])

  return <ListPalet>
    <details open>
      <summary>
        <FaMountain /> PLATEAU ({plateau.length})
      </summary>
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
      <ListBox>
        {plateau
          .filter(it => tag === '' ? true : tag === it.dataType)
          .filter(it => keyword === '' ? true : it.title.includes(keyword))
          .map(it =>
            <ListItem key={it.id}
              name = "plateau"
              value = {it.id}
              selectItem = {(v) => selectItem(v)}
            >
              <Item>
                <span>{DATA_TYPE[it.dataType]}</span>
                <span>{it.title}</span>
              </Item>
            </ListItem>
          )}
      </ListBox>
    </details>
  </ListPalet>
}
