function Header() {
    return (
        <header className="nav-box">
            <div className="logo">
                <img src="vite.svg" className="vite-img" />
            </div>


            <nav className="menu">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Pages</a>
                <a href="#">Blog</a>
            </nav>
        </header>
    )
}

export default Header
