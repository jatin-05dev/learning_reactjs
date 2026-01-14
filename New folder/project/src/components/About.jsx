 import img from "../assets/react.svg";

function About() {
  return (
    <div style={{
      padding: "60px",
      display: "flex",
      gap: "40px",
      alignItems: "center"
    }}>
      <img src={img} style={{
        width: "300px",
        borderRadius: "15px"
      }} />

      <div style={{
        backgroundColor: "#f1f5f9",
        padding: "25px",
        borderRadius: "12px"
      }}>
        <h2>About Us</h2>
        <p>
          This project is built using React functional components
          and inline styling. It shows basic understanding of React.
        </p>
      </div>
    </div>
  );
}

export default About;