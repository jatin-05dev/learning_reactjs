function Contact() {
  return (
    <div style={{
      padding: "60px",
      backgroundColor: "#0f172a",
      color: "white"
    }}>
      <h2>Contact Us</h2>

      <input style={input} placeholder="Name" />
      <input style={input} placeholder="Email" />
      <textarea style={input} placeholder="Message"></textarea>

      <button style={btn}>Send</button>
    </div>
  );
}

const input = {
  display: "block",
  width: "300px",
  margin: "10px 0",
  padding: "10px",
  borderRadius: "8px",
  border: "none"
};

const btn = {
  padding: "10px 25px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "white"
};

export default Contact;
