import { useContext } from "react"
import {obj} from '../main'
function Child3({data}) {
// let name=useContext(obj)
let {name,figure}=useContext(obj)

  return (
    <>  
   <h1 onClick={data}>click puju</h1>
    <h1>{name} {figure}</h1>
    </>
  )
}

export default Child3
