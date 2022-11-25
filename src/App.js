import { Hsluv } from 'hsluv'
import './App.css'

function App() {
  const hex = '#37a8f8'

  const convColor = new Hsluv()
  convColor.hex = '#37a8f8'
  convColor.hexToHsluv()

  return (
    <div className='App'>
      <div>{`My hex color: ${hex}`}</div>
      <div>{`HSLUV lightness :${convColor.hsluv_l}`}</div>
    </div>
  )
}

export default App
