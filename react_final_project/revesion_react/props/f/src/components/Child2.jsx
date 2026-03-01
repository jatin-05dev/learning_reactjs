 
import Child3 from "./Child3"
function Child2(p) {
 function say() {
    alert("hello puju rani")
 }
  return (
    <>  
    {p.islog ?<h1>mehoo child 2 aur puju login he aur ye he uske fav fruits {p.arr.map(e => e+" ")}</h1>:<h1>mehoo child 2 aur puju login nhi he</h1>}
    <Child3 data={say}/>
    </>
  )
}

export default Child2
