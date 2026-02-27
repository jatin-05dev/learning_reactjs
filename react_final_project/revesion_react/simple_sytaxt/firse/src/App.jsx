import './App.css'
import F from './component/f';   
function App() {
     let name='puju'
     let sirname='yaduwanshi'
     let color="red"
     let isblue=false


  return (
    <>

    <h1 className="col">hello {name} </h1>
    <h1 style={{color : 'pink'}}>hello {name} {sirname} </h1>
    <h1 style={{color:color}} >hello {name} {sirname} </h1>
    <h1 style={{color: isblue ? 'blue' : "" }}>hello {name} {sirname} </h1>

<F/>
       
    </>
  )
}

export default App
