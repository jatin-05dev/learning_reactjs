import g1 from "../assets/react.svg";
import g2 from "../assets/react.svg";
import g3 from "../assets/react.svg";
import g4 from "../assets/react.svg";
import g5 from "../assets/react.svg";

function Gallery() {
  return (
    <div style={{ padding: "60px" }}>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "15px",
        marginTop: "25px"
      }}>
        <div><img src={g1} style={imgStyle} /><p>Nature</p></div>
        <div><img src={g2} style={imgStyle} /><p>City</p></div>
        <div><img src={g3} style={imgStyle} /><p>Technology</p></div>
        <div><img src={g4} style={imgStyle} /><p>Design</p></div>
        <div><img src={g5} style={imgStyle} /><p>Creative</p></div>
      </div>
    </div>
  );
}

const imgStyle = {
  width: "100%",
  borderRadius: "10px"
};

export default Gallery;
