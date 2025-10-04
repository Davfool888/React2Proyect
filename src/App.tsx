import { useState } from 'react'
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
  const [name, setName] = useState("Santiago")

const countMore = () =>{
  setCount((count) => count +1)
  setCount((count) => count +1)
  setCount((count) => count +1)

}

const changeName= () =>{
  setName("David")
}

  return (
    <>
      <div>
        <Button label={`count is ${count}`} parentMethod={ countMore} />

        </div>
    </>
  )
}

export default App
