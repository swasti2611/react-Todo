import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ width:"100%",height:'auto'}}>
    <TodoList/>
      
      
      
      </div>
    </>
  )
}

export default App
