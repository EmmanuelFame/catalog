import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StoreCatalog } from './components/StoreCatalog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      < StoreCatalog />
    </>
  )
}

export default App
