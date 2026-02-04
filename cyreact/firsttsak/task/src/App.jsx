// import Header from "./component/header"
// import Nav from "./component/Nav"

// function App() {
  
//   return (
//     <>
//    <Header/>
//    <Nav/>
//     </>
//   )
// }


// export default App



// 5 React Components with Inline CSS

export function NavBar() {
  return (
    <nav
      style={{
        background: "white",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>MyWebsite</h1>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>About</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
      </ul>
    </nav>
  );
}

export function MiddleSection() {
  return (
    <section style={{ textAlign: "center", padding: "60px 0" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "600", marginBottom: "10px" }}>
        Welcome to My Website
      </h2>
      <p style={{ fontSize: "18px", maxWidth: "600px", margin: "auto" }}>
        This is the middle section with inline CSS styling.
      </p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "blue",
          color: "white",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "40px",
      }}
    >
      © 2025 MyWebsite | All Rights Reserved
    </footer>
  );
}

export function SideBar() {
  return (
    <aside
      style={{
        width: "200px",
        padding: "20px",
        background: "#f5f5f5",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Sidebar</h3>
      <p style={{ fontSize: "14px" }}>Extra navigation or info goes here.</p>
    </aside>
  );
}

export function HeaderBanner() {
  return (
    <div
      style={{
        width: "100%",
        padding: "40px 0",
        background: "#e0f7ff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Header Banner</h2>
      <p style={{ fontSize: "16px" }}>This is the 5th component with inline CSS.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <HeaderBanner />
      <NavBar />
      <SideBar />
      <MiddleSection />
      <Footer />
    </div>
  );
}