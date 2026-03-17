import Child1 from "./Child1"
function  Header(props) {
let obj={
    name:"jatin",
    class:"bca"
}
    return(
        <>
        <h1>hello</h1>
        <Child1 data={obj}/>
        </>
    )
    
}
export default Header