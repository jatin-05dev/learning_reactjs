import Child1 from "./Child1"
import Child2 from "./Child2"
import App from "../App"
import { useContext } from "react"
import { app_obj } from "../App"
function Parent() {
 let name=useContext(app_obj)
  return (
    <>
       <Child1 data='hello puju rani' d={35}></Child1>  
       <Child2 islog={true} arr={['mango','apple','grapes']}></Child2>  
 <app_obj.Consumer>
            {
                (name)=>{
                    return <h1>hi iam learning {name}</h1>
                }
            }
        </app_obj.Consumer>
    </>
  )
}

export default Parent
