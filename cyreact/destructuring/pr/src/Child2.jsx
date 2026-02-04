import Child3 from "./Child3"
function Child2({college,course,name,sur}){
    let person={
        name:'jatin', age:56
    }

  return(
    <>
    this is Child2
    <h1>{college} {course}</h1>
    <h1>{name} {sur}</h1>
      <Child3 userdata={person}/>
    </>
  )
}

export default Child2