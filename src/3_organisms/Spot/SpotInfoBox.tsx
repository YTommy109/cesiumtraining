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
  spot:SpotItem
}
export const SpotInfoBox:FC<Props> = ({spot}) => {
  const [mode, setMode] = useState<string>('info')

  return <div style={STL.BOX}>
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown
        components={{img:({node,...props})=><img style={{maxWidth:'100%'}}{...props}/>}}
      >
        {`${spot.description}`}
      </ReactMarkdown>
    }
    {mode === 'edit' && <SpotEditor spot={spot}/>}
  </div>
}
