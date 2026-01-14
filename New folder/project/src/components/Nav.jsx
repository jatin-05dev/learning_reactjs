function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      backgroundColor: "#0f172a",
      color: "white"
    }}>
      <h3>ReactSite</h3>
      <div>
        <span style={{ margin: "15px" }}>Home</span>
        <span style={{ margin: "15px" }}>About</span>
        <span style={{ margin: "15px" }}>Services</span>
        <span style={{ margin: "15px" }}>Gallery</span>
        <span style={{ margin: "15px" }}>Contact</span>
      </div>
    </div>
  );
}

export default Navbar;
