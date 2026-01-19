 import Home from "./Home"
 import Task from "./Task"
 import Img from "./Img"
function App() {

  function demo(a){
    alert("working  "+a)
  }
  function add(){
    alert("you click dbl")
  }
  function sd(){
    alert("hello")
  }
  function mi(){
    alert("hello")
  }
return(
  <>
{/* 
  <h1>functions</h1>
   <h1>clcik</h1>
  <button onClick={()=>demo('jatin')} > click </button>
  <h1>dblclick</h1>
  <button onDoubleClick={add}>dbl </button>
  <h1>omouse enter</h1>
  <button onMouseEnter={sd}>click</button>
  <h1>mouse leave</h1>
  <button onMouseLeave={mi}>click</button>
  <h1>one</h1>
  <Home/> */}

<Task/>
<Img/>

  </>
)
}

export default App
