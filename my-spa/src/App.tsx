import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiquidGlass from 'liquid-glass-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    <LiquidGlass
  displacementScale={64}
  blurAmount={0.1}
  saturation={130}
  aberrationIntensity={2}
  elasticity={0.35}
  cornerRadius={100}
  padding="8px 16px"
  onClick={() => console.log('Button clicked!')}
>
  <span className="text-white font-medium">Click Me</span>
</LiquidGlass>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
