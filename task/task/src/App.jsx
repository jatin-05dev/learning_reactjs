import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Counter from './Counter'
import First from './First'
import Second from './Second'

function App() {
  return (
    <>
      <Home />  

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
