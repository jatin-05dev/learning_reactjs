import Nav from './components/Nav';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contect";
import Footer  from './components/Footer';

function App() {
  return (
    <>
       <Nav/>
        <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
       <Footer/>
    </>
  )
}

export default App
