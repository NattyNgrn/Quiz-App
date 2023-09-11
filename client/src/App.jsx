
import Quiz from "./components/quiz"

function App() {
  {/*styling the components and header inside the div instead of css*/}
  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    }}>
        <h1>Test your animal knowledge!</h1>
        <Quiz/> {/*calling quiz component */}
      </div>
  )
}

export default App
