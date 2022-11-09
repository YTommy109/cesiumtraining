import {FC, useCallback, useState} from 'react'
import {useCesium} from 'resium'
import {TabBar} from '2_molecules/infobox/TabBar'
import {SpotEditor} from './SpotEditor'
import ReactMarkdown from 'react-markdown'

type Props = {
  cashkey:DataPack
  spot:SpotItem
}
export const SpotInfoBox:FC<Props> = ({cashkey, spot}) => {
  const {viewer} = useCesium()
  const [mode, setMode] = useState<string>('info')

  const flyTo = useCallback(() => {
    viewer.flyTo(viewer.entities.getById(spot.id))
  }, [viewer, spot.id])

  return <div className="org_infobox" style={{minHeight: '480px'}}>
    <link href="/infobox.css" rel="stylesheet" />
    <TabBar mode={mode} setMode={setMode} flyTo={flyTo} />
    {mode === 'info' &&
      <ReactMarkdown
        components={{img: ({node, ...props}) => <img {...props}/>}}
      >
        {`# ${spot.title}\n\n${spot.description}`}
      </ReactMarkdown>
    }
    {mode === 'edit' && <SpotEditor cashkey={cashkey} spot={spot}/>}
  </div>
}
