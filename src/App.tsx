import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './components/index'


const style = {
    button: {
      color: "blue",
    backgroundColor: "grey"
    }
    
  }

function App() {
  const [count, setCount] = useState(0)

const countMore = () =>{
  setCount((count) => count +1)
}
  

  return (
    <>
      <div>
        <Button label={`Count is ${count}`} parentMethod={countMore}/>
        </div>
    </>
  )
}

export default App
