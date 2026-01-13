function Nav() {
  return (
    <div style={styles.nav}>
      <h2>My Website</h2>

      <ul style={styles.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  }
};

export default Nav;
