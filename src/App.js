import { Hsluv } from 'hsluv'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [lightness, setLightness] = useState('')
  const [hex, setHex] = useState('ff79c6')
  const [textColor, setTextColor] = useState('')

  const conv = new Hsluv()

  const handleMessageChange = (event) => {
    // Listen for changes in the input field
    setHex(event.target.value)
    calculateLightness(event.target.value)
    const num = Number(conv.hsluv_l).toFixed(1)
    setLightness(num)
  }

  const calculateLightness = (hex) => {
    // Function to calculate the lightness from a hex value
    conv.hex = `#${hex}`
    conv.hexToHsluv()

    //Set the text color to be black or white
    const calculatedTextColor = () => (conv.hsluv_l > 70 ? 'BLACK' : 'WHITE')
    setTextColor(calculatedTextColor)
  }

  useEffect(() => {
    //Calculate lightness on page load
    calculateLightness(hex)
    const num = Number(conv.hsluv_l).toFixed(1)
    setLightness(num)
  })

  return (
    <div className='App'>
      <div>
        background color:
        <input
          type='text'
          id='message'
          name='message'
          onChange={handleMessageChange}
          value={hex}
        />
      </div>
      <div>HSLUV lightness :{lightness}</div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: `#${hex}`,
          border: '1px solid #000000',
          color: textColor,
        }}
      >
        Text inside should be {textColor}
      </div>
    </div>
  )
}

export default App
