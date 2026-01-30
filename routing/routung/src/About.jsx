import { useState } from "react"
import { Link } from "react-router-dom"
function About(){
    
    // let [num2, setNUM2] = useState(0)
    let [val, setval] = useState(false)


    return(
        <>
        {/* <h1>about page</h1>
        <p>{num2}</p>
        <button onClick={()=>setNUM2(num2++)}>+</button>
        <button onClick={()=>setNUM2(num2--)}>-</button>

        <Link to="/contact">contact-</Link> */}
        <h1>about</h1>
        {val ? <h1>get ready</h1>:<h1>not ready ....</h1>}
        <button onClick={()=>setval(!val)}>change</button>

         
        </>
    )
}
export default About