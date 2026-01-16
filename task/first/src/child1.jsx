import Child2 from "./child2"
function Child1(p){
    return(
        <>
        <h1> i am child 1</h1>
        <Child2 s={p.sala}/>
        </>
    )
}
export default Child1