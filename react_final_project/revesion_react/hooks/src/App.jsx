import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [name,set]=useState("puju")
let [num,setn]=useState(0)
const [color, setColor] = useState("black");
  // useEffect(()=>alert("cybrom...."),[])
  // useEffect(()=>alert("cybrom...."))
  useEffect(()=>alert("cybrom...."),[color])
function inc(){
set("puju")
}
function un(){
  setn(num++)
}
function dc(){
  setn(num--)
}
  return (
    <>

      <h1 style={{ color: color }}>
        React Color Change Component
      </h1>
    hello {name}  rating {num}
    <button onClick={inc}>click to turn on puju </button>
    <button onClick={()=>set("hotty rani puju")}>click  </button>
    <button onClick={un}>click to rate puju</button>
    <button onClick={dc}>click to rate puju</button>


      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>

     </>
  )
}

export default App
