import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Heading from './components/Heading'
import Image from './components/Image'

import Model from '../src/assets/Group 2.png'
import Menu from './components/Menu'
import Flex from './components/Flex'
import Container from './components/Container'
import Home from './components/Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
