import { useState } from 'react'
import './App.css'
import Quiz from "./components/quiz"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Test your animal knowledge!</h1>
        <Quiz/>
      </div>
  )
}

export default App
