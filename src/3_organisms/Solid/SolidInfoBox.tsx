import { FC, useState } from 'react'
import { TabBar } from '2_molecules/infobox/TabBar'
import { SolidEditor } from './SolidEditor'
import ReactMarkdown from 'react-markdown'

const STL = {
  BOX: {
    height:         '800px'
  }
}

type Props = {
  pyramid:Pyramid
  changeLocation:(id:string, location:GeoLocation)=>void
}
export const SolidInfoBox:FC<Props> = ({pyramid, changeLocation}) => {
  const [mode, setMode] = useState<string>('info')

  return <div style={STL.BOX}>
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown>
        {`${pyramid.description}`}
      </ReactMarkdown>

    }
    {mode === 'edit' && <SolidEditor
        pyramid         = {pyramid}
        changeLocation  = {changeLocation}
      />
    }
  </div>
}
