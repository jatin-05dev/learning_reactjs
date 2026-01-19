 import { useState } from "react";

function Task() {
  const [color, setColor] = useState("black");

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
