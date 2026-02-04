import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Contact from './Contact'
import Services from './Services'
import Landing from './Landing'
import Layout from './Layout'
function App() {

  return (
    <>
     {/* <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/contact' element={<Contact/>}/>




     </Routes> */}


      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
     </Routes>

     <About/>
    </>
  )
}

export default App
