
import Quiz from "./components/quiz"

function App() {

  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    }}>
        <h1>Test your animal knowledge!</h1>
        <Quiz/>
      </div>
  )
}

export default App
