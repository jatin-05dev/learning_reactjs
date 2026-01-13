function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 My Website. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "12px",
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
};

export default Footer;
