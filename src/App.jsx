import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage  = () => {
    setShowMessage (!showMessage);
  }
  const[appear, setAppear] = useState(false);
  const openMessage = () => {
      setAppear (!appear);
  }
  return (
 <div>
  <h1>Show/Hide Message</h1>
  <button onClick={toggleMessage}>
    {showMessage ? "Hide" : "Show"} Message
  </button>

  <button onClick={openMessage}>
    {appear ? "Hide" : "Show"} Message
  </button>

  {showMessage && <p>This is a hidden message! 👀</p>}
  {appear && <p>Hiding second message</p>}
 </div>
  )
}
// This is what a component looks like 
export default App
