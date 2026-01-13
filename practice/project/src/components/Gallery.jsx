import "../app.css";
import g1 from "../assets/react.svg";
import g2 from "../assets/react.svg";
import g3 from "../assets/react.svg";
import g4 from "../assets/react.svg";
import g5 from "../assets/react.svg";

function Gallery() {
  return (
    <div className="page gallery">
      <h3>Gallery</h3>
      <img src={g1} />
      <img src={g2} />
      <img src={g3} />
      <img src={g4} />
      <img src={g5} />
    </div>
  );
}

export default Gallery;
