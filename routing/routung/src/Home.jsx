import { Link } from "react-router-dom"
function Home(){
    return(
        <>
        <h1>home page</h1>
        <Link to="/">HOME</Link>
        <Link to="/about">about</Link>

        </>
    )
}
export default Home