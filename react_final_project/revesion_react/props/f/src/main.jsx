import { StrictMode,createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
let obj=createContext()
let data={name:'puju',figure:'sexy'}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <obj.Provider value={data}>
    <App />
    </obj.Provider>
  </StrictMode>,
)
export {obj}
