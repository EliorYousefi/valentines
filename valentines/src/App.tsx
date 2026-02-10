import school from './assets/school.jpg'
import smoke from './assets/smoke.jpg'
import strong from './assets/strong.jpg'
import suit from './assets/suit.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={school} className="school" alt="" />
        <img src={smoke} className="smoke" alt="" />
        <img src={strong} className="strong" alt="" />
        <img src={suit} className="suit" alt="" />
      </div>
      <h1>Will you be my valentines?</h1>
    </>
  )
}

export default App
