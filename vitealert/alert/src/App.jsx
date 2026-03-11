import { toast } from "react-toastify"
import { BiAtom } from "react-icons/bi";
function App() {
 function demo(){
   toast('secces in cgl',{
    position:"top-center",
    type:"sucess",
    autoClose:100
   })
 }
  return (
    
     <>
<BiAtom />
     <button onClick={demo}>click me !</button>
     </>
  )
}

export default App
