//  import { useState } from "react";
 import { useEffect,useState } from "react"
 
function Task() {
  const [color, setColor] = useState("black");
  // useEffect(()=>alert("cybrom...."),[])
  // useEffect(()=>alert("cybrom...."))
  useEffect(()=>alert("cybrom...."),[color])



  return (
    <div>
      <h1 style={{ color: color }}>
        React Color Change Component
      </h1>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default Task;
