 import { Link } from 'react-router-dom'

function Home() {
  return (
    <nav style={{ background: "#222", padding: "15px" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Counter</Link>
      <Link to="/first" style={{ color: "#fff", marginRight: "15px" }}>First</Link>
      <Link to="/second" style={{ color: "#fff" }}>Second</Link>
    </nav>
  )
}

export default Home
