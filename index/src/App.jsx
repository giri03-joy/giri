import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sampuImage from './assets/sampuu.jpg' // ✅ Import your image
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={sampuImage} alt="Sampu" />
        </a>
      </div>
      <h1>sampuuuuu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          sampu is {count}% gayy
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
