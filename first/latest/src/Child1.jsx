import Child2 from "./Child2"
function  Child1(props) {
    return(
        <>
        <h1>name is child2 {props.data.name}</h1>
  <Child2 data1={props}/>
        </>
    )
    
}
export default Child1