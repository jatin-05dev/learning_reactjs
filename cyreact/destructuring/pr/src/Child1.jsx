import Child2 from "./Child2"
function Child1(props){
    const{name,surname}=props //destrucyuring

  return(
    <>
    <h1>this child 3</h1>
    <h1>{name}{surname}</h1>
    <Child2 college='rgc' course='BCA' name={name} sur={surname}/>

    
    </>
  )
}

export default Child1