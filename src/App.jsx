import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  return (
 <div>
  <h1>My Task List</h1>
  <input 
  type="text" 
  value={task}
  onChange={(e) => setTask(e.target.value)}
  placeholder='Enter a task'
  />
  <button>Add</button>
  <p>You typed: {task}</p>
 
 </div>

  );
}
// This is what a component looks like 
export default App
