import { Hsluv } from 'hsluv'
import { useState, useEffect } from 'react'
import { ChromePicker } from 'react-color'

import './App.css'

function App() {
  const [lightness, setLightness] = useState('')
  const [hex, setHex] = useState('ff79c6')
  const [textColor, setTextColor] = useState('')

  const conv = new Hsluv()

  const calculateLightness = (hex) => {
    // Function to calculate the lightness from a hex value
    conv.hex = hex
    conv.hexToHsluv()

    //Set the text color to be black or white
    const calculatedTextColor = () => (conv.hsluv_l > 67 ? 'BLACK' : 'WHITE')
    setTextColor(calculatedTextColor)
  }

  useEffect(() => {
    //Calculate lightness on page load
    calculateLightness(hex)
    const num = Number(conv.hsluv_l).toFixed(1)
    setLightness(num)
  })

  const handleColorChange = (color, e) => {
    setHex(color.hex)
  }

  return (
    <div
      className='App'
      style={{
        backgroundColor: hex,
        color: textColor,
      }}
    >
      <div>
        background color:
        <ChromePicker
          color={hex}
          disableAlpha={true}
          onChange={handleColorChange}
        />
      </div>
      <div>HSLUV lightness :{lightness}</div>
      <div>Text inside should be {textColor}</div>
    </div>
  )
}

export default App
