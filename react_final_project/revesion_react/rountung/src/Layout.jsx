import { Link,Outlet } from "react-router-dom"
function Layout(){

    return(
        <>
        <nav>
            <h1>logo</h1>
            <ul>
                
                <li>contact</li>
                <li>servicd</li>
            </ul>
        </nav>

        <main>
            <Outlet/>
        </main>


        <footer>
            <h1>this is footer</h1>
        </footer>
        </>
    )
    
}

export default Layout