import './App.css'
import {Header} from './layout/Header' 
import {Lateral} from './layout/Lateral'
import {Footer} from './layout/Footer'
import {Nav} from './layout/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='layout'>
      <header/>
      <nav/>
      <footer/>
      </div>

     
    </>
  )
}

export default App
