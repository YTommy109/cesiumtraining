import {FC, useState} from 'react'
import {TabBar} from '2_molecules/infobox/TabBar'
import {SpotEditor} from './SpotEditor'
import ReactMarkdown from 'react-markdown'

type Props = {
  spot:SpotItem
}
export const SpotInfoBox:FC<Props> = ({spot}) => {
  const [mode, setMode] = useState<string>('info')

  return <div className="org_infobox" style={{minHeight: '400px'}}>
    <link href="/infobox.css" rel="stylesheet"></link>
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown
        components={{img: ({node, ...props}) => <img {...props}/>}}
      >
        {`# ${spot.title}\n\n${spot.description}`}
      </ReactMarkdown>
    }
    {mode === 'edit' && <SpotEditor spot={spot}/>}
  </div>
}
