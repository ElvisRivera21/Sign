import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authenticate/>
      <h1>test</h1>
      <SignUpForm/>
    </>
  )
}

export default App
