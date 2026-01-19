import C1 from './Components/C1'
function App() {
  let obj={
    name:"jatin",
    salary:50000,
    post:'SDE'
  }
  return (
    <>
    <h1>hello i am  app.jsx</h1>
    <C1 data={obj}/>
    </>
  )
}

export default App
