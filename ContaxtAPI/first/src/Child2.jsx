import { dataobj } from "./App"
function Child2(){
    return(
        <>
        <h1>hi am child 2</h1>
        <dataobj.Consumer>
            {
                (data)=>{
                    return <h1>hi iam learning {data.class}</h1>
                }
            }
        </dataobj.Consumer>
        </>
    )
}
export default Child2