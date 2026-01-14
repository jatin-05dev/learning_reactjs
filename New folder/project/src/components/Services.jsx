function Services() {
  return (
    <div style={{ padding: "60px", backgroundColor: "#f8fafc" }}>
      <h2 style={{ textAlign: "center" }}>Our Services</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        marginTop: "30px"
      }}>
        <div style={card}>Web Design</div>
        <div style={card}>React Basics</div>
        <div style={card}>Frontend UI</div>
      </div>
    </div>
  );
}

const card = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};

export default Services;
