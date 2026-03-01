import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import { Link } from "react-router-dom"
import Layout from './Layout'
function App() {

  return (
    <> 
     <Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<Home1/>}/>
    <Route path='skill' element={<Home2/>}/>
    <Route path='home3' element={<Home3/>}/>
  </Route>
</Routes>


      
<h1>hello app welcome puju</h1>



  

     </>
  )
}

export default App
