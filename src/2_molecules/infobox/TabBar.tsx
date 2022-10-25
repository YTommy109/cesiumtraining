import {ChangeEventHandler, FC} from 'react'
import {FaTrash} from 'react-icons/fa'

const STL = {
  HIDDEN: {
    display: 'none'
  },
  TAB_BAR: {
    display:             'grid',
    gridTemplateColumns: '40px 40px 1fr 14px',
    borderBottom:        'thin solid dimgray'
  }
}

const styleTabItem = (isActive:boolean):{color:string} => ({color: isActive ? 'white' : 'gray'})

type Props = {
  mode:string
  setMode:(v:string) => void
}

export const TabBar:FC<Props> = ({mode, setMode}) => {
  const handleChangeMode:ChangeEventHandler<HTMLInputElement> = (e) => setMode(e.target.value)

  return <>
    <input style={STL.HIDDEN} id="mode_info" name="mode" type="radio" value="info" onChange={handleChangeMode} checked={mode === 'info'} />
    <input style={STL.HIDDEN} id="mode_edit" name="mode" type="radio" value="edit" onChange={handleChangeMode} checked={mode === 'edit'}/>
    <div style={STL.TAB_BAR}>
      <label style={styleTabItem(mode === 'info')} htmlFor="mode_info">情報</label>
      <label style={styleTabItem(mode === 'edit')} htmlFor="mode_edit">編集</label>
      <br />
      <FaTrash onClick={() => console.log()} />
    </div>
  </>
}
