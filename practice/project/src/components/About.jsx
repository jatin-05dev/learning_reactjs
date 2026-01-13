import "../app.css";
import aboutImg from "../assets/react.svg";

function About() {
  return (
    <div className="page">
      <h3>About</h3>
      <img src={aboutImg} width="150" />
      <p>This is about component</p>
    </div>
  );
}

export default About;
