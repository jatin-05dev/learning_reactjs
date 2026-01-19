import Hero from "./com/Hero"
import Hero3 from "./com/Hero3"

function App(){
let obj={class:"react",period:50000000}
  return(
    <>
    <h2>app files

    </h2>
    <Hero name="jatin" age={20} city="bhopal" object={obj}/>
    <Hero3 name="jatin"/>
    

    </>
  )

}
export default App