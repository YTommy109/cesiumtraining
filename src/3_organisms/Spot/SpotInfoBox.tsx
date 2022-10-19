import { FC, useState } from 'react'
import { TabBar } from '2_molecules/infobox/TabBar'
import { SpotEditor } from './SpotEditor'
import ReactMarkdown from 'react-markdown'

const STL = {
  BOX: {
    height:         '800px'
  }
}

type Props = {
  spot:Spot
  changeLocation:(id:string, location:GeoLocation)=>void
}
export const SpotInfoBox:FC<Props> = ({spot, changeLocation}) => {
  const [mode, setMode] = useState<string>('info')

  return <div style={STL.BOX}>
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown>
        {`${spot.description}`}
      </ReactMarkdown>
    }
    {mode === 'edit' && <SpotEditor
        spot            = {spot}
        changeLocation  = {changeLocation}
    />}
  </div>
}
