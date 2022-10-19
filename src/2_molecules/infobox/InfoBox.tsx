import { useState } from 'react'
import { TabBar } from './TabBar'
import { RotationEntry } from './RotationEntry'

const STL = {
  BOX: {
    height:         '400px'
  }
}

export const InfoBox = () => {
  const [mode, setMode] = useState<string>('info')
  const [rotation, setRotation] = useState<GeoRotation>({heading:0, pitch:0, roll:0})

  return <div style={STL.BOX}>
    <TabBar mode={mode} setMode={setMode} />
    <br />

    {mode === 'info' &&
      <div>
        <h1>ラベル</h1>
        <p>ラベルを置けるのよ。</p>
        <table>
          <tbody>
            <tr><th>ピン</th><td>なし</td><td>red</td><td>blue</td><td>green</td><td>yellow</td></tr>
          </tbody>
        </table>
        <ul>
          <li><input type="radio" />イメージ1</li>
          <li><input type="radio" />イメージ2</li>
          <li><input type="radio" />イメージ3</li>
          <li><input type="file" /></li>
        </ul>
      </div>
    }
    {mode === 'edit' && <RotationEntry rotation={rotation} setRotation={setRotation} />}
  </div>
}
