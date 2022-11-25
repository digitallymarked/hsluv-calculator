import { Hsluv } from 'hsluv'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [lightness, setLightness] = useState('')
  const [message, setMessage] = useState('ff79c6')

  const conv = new Hsluv()

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
    calculateLightness(event.target.value)
    const num = Number(conv.hsluv_l).toFixed(1)
    setLightness(num)
  }

  const calculateLightness = (hex) => {
    conv.hex = `#${hex}`
    conv.hexToHsluv()
  }

  useEffect(() => {
    calculateLightness(message)
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
          value={message}
        />
      </div>
      <div>HSLUV lightness :{lightness}</div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: `#${message}`,
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
