import { useState } from 'react'
import './App.css'
import Navbar from './Pages/navbar'
import Header from './Pages/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}

export default App
