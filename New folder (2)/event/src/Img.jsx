 import { useState } from "react";

function Img() {
  const [img, setImg] = useState("");

  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "200px",
          border: "1px solid black",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "10px"
        }}
      ></div>

      <button onClick={() => setImg("sample.jpeg")}>Image 1</button>
      <button onClick={() => setImg("lp.jpg")}>
        Image 2
      </button>
        <button onClick={() => setImg("vite.svg")}>
        Image 3
      </button>
    </div>
  );
}

export default Img;
