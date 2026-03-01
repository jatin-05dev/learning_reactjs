import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent' 
import { StrictMode,createContext } from 'react'
let app_obj=createContext()
let data="app puju data hotty puju "
function App() {

  return (
    <>
    <app_obj.Provider value={data}>
    <Parent/>
    </app_obj.Provider>
       
    </>
  )
}

export default App
export {app_obj}