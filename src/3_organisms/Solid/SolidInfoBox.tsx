import {FC, useState} from 'react'
import {TabBar} from '2_molecules/infobox/TabBar'
import {CylinderEditor} from './SolidEditorCylinder'
import {BoxEditor} from './SolidEditorBox'
import ReactMarkdown from 'react-markdown'

type CylinderProps = {
  cashkey:DataPack
  item:CylinderItem
}
export const SolidCylinderInfoBox:FC<CylinderProps> = ({cashkey, item: pyramid}) => {
  const [mode, setMode] = useState<string>('info')

  return <div className="org_infobox" style={{minHeight: '480px'}}>
    <link href="/infobox.css" rel="stylesheet" />
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown>
        {`${pyramid.description}`}
      </ReactMarkdown>

    }
    {mode === 'edit' && <CylinderEditor
      cashkey = {cashkey}
      item = {pyramid}
    />}
  </div>
}

type BoxProps = {
  cashkey:DataPack
  item:BoxItem
}
export const SolidBoxInfoBox:FC<BoxProps> = ({cashkey, item: pyramid}) => {
  const [mode, setMode] = useState<string>('info')

  return <div className="org_infobox" style={{minHeight: '480px'}}>
    <link href="/infobox.css" rel="stylesheet" />
    <TabBar mode={mode} setMode={setMode} />
    {mode === 'info' &&
      <ReactMarkdown>
        {`${pyramid.description}`}
      </ReactMarkdown>

    }
    {mode === 'edit' && <BoxEditor
      cashkey = {cashkey}
      item    = {pyramid}
    />}
  </div>
}
