import { Hsluv } from 'hsluv'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [lightness, setLightness] = useState('')
  const [hex, setHex] = useState('ff79c6')

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
          color: 'white',
        }}
      >
        Text inside should be
      </div>
      {/* <div>Accent color:{hex}</div> */}
    </div>
  )
}

export default App
