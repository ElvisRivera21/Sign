import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

function App() {
  //State Variable
  const [token, setToken] = useState(null);

  // Function to set the token in the parent component
  const handleSetToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      
      
      <h1>test</h1>
      <SignUpForm token={token} setToken={setToken} />
    </>
  )
}

export default App
