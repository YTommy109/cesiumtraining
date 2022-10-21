import {FC, useId, ChangeEventHandler} from 'react'

type Props = {
  label:string
  value:number
  list?:string
  handleChange:ChangeEventHandler<HTMLInputElement>
}
const DegreeRange:FC<Props> = ({label, value, handleChange, list}) => {
  const id = useId()
  return <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="range" min={-180} max={180} list={list} defaultValue={value} onChange={handleChange} />
    <span style={{textAlign: 'right'}}>{value}</span>
  </>
}

const STL = {
  FIELDSET: {
    borderRadius: '8px',
    borderColor:  'dimgray'
  },
  UL: {
    listStyle: 'none',
    padding:   '0'
  },
  LI: {
    display:             'grid',
    gridTemplateColumns: '80px 220px 60px'
  }
}

type Props2 = {
  rotation:GeoRotation
  setRotation:(state:any) => any
}
export const RotationEntry:FC<Props2> = ({rotation, setRotation}) => {
  const setHeading:ChangeEventHandler<HTMLInputElement> = (e) => setRotation((state:any) => ({...state, heading: parseFloat(e.target.value)}))
  const setPitch:ChangeEventHandler<HTMLInputElement>   = (e) => setRotation((state:any) => ({...state, pitch: parseFloat(e.target.value)}))
  const setRoll:ChangeEventHandler<HTMLInputElement>    = (e) => setRotation((state:any) => ({...state, roll: parseFloat(e.target.value)}))

  return <fieldset style={STL.FIELDSET}>
    <legend>回転</legend>
    <ul style={STL.UL}>
      <li style={STL.LI}>
        <DegreeRange label="進行方向:" list="rotationstep" value={rotation.heading} handleChange={setHeading} />
      </li>
      <li style={STL.LI}>
        <DegreeRange label="縦回転:" list="rotationstep" value={rotation.pitch} handleChange={setPitch} />
      </li>
      <li style={STL.LI}>
        <DegreeRange label="横回転:" list="rotationstep" value={rotation.roll} handleChange={setRoll} />
      </li>
    </ul>
    <datalist id="rotationstep">
      <option value={-90} />
      <option value={0} />
      <option value={90} />
    </datalist>
  </fieldset>
}
