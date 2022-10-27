import {FC, MouseEventHandler, ChangeEventHandler, useState} from 'react'
import styled from 'styled-components'
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
  width:                    240px;
  border-radius:            8px;
  background-color:         midnightblue;
  padding:                  8px;
  opacity:                  .7;
  color:                    gainsboro;

  ol {
    list-style:             none;
    padding:                0;
    height:                 50vh;
    min-height:             300px;
    overflow-y:             scroll;
  }
`

const TagBar = styled.div`
  white-space:                nowrap;
  overflow-x:                 scroll;
  padding:                     3px;
`
const TagButton = styled.button`
  font-size:                  x-small;
`

const Li = styled.li`
  input[type=radio] {
    display:                  none;
  }
  input[type=radio]:checked + label {
    background-color:         lightskyblue;
    color:                    midnightblue;
  }
  label {
    display:                  grid;
    grid-template-columns:    80px 160px;

    span {
      overflow:               hidden;
      white-space:            nowrap;
      text-overflow:          ellipsis;
    }
  }
`

type Props = {
  plateau:PlateauStream[]
}
export const PlateauList:FC<Props> = ({plateau}) => {
  const [tag, setTag] = useState<string|null>(null)
  const [keyword, setKeyword] = useState<string>('')
  const {selectItem} = usePlateauUtil()

  const handleTagClick:MouseEventHandler<HTMLButtonElement> = (e) => setTag(() => e.currentTarget.value)

  const handleChangeFilter:ChangeEventHandler<HTMLInputElement> = (e) => setKeyword(() => e.target.value)

  const handleSelect:ChangeEventHandler<HTMLInputElement> = (e) => selectItem(e.target.value)

  return <ListPalet>
    <details>
      <summary><FaMountain /> PLATEAU ({plateau.length})</summary>
      <TagBar>
        <TagButton
          onClick   = {() => setTag(null)}
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
      <ol>
        {plateau
          .filter(it => tag == null ? true : tag === it.dataType)
          .filter(it => keyword === '' ? true : it.cityInfo.prefecture.includes(keyword) || it.cityInfo.city.includes(keyword) || it.cityInfo.town.includes(keyword))
          .map(it =>
          <Li key={it.id}>
            <input
              type      = "radio"
              id        = {`plateau_${it.id}`}
              name      = "plateau"
              value     = {it.id}
              onChange  = {handleSelect}
            />
            <label htmlFor={`plateau_${it.id}`}>
              <span>{DATA_TYPE[it.dataType]}</span>
              <span>{it.cityInfo.prefecture}{it.cityInfo.city}{it.cityInfo.town}{it.texture && '_テク'}{it.low_resolution && '_ロー'}</span>
            </label>
          </Li>
          )}
      </ol>
    </details>
  </ListPalet>
}
