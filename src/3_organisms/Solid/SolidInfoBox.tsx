import {FC, useState} from 'react'
import {TabBar} from '2_molecules/infobox/TabBar'
import {SolidEditor} from './SolidEditor'
import ReactMarkdown from 'react-markdown'

type Props = {
  cashkey:DataPack
  pyramid:PyramidItem
}
export const SolidInfoBox:FC<Props> = ({cashkey, pyramid}) => {
  const [mode, setMode] = useState<string>('info')

  return <div className="org_infobox" style={{minHeight: '480px'}}>
    <link href="/infobox.css" rel="stylesheet" />
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown>
        {`${pyramid.description}`}
      </ReactMarkdown>

    }
    {mode === 'edit' && <SolidEditor
      cashkey = {cashkey}
      pyramid = {pyramid}
    />}
  </div>
}
