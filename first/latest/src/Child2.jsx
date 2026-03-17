import Child3 from "./Child3"

function  Child2(props) {
     

    return(
        <>
       <h1>and class id child 2 {props.data1.data.class}</h1>
 <Child3 position="SDE" salary={5000} />


        </>
    )
    
}
export default Child2