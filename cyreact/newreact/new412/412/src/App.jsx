import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'


function App() {
  let arrofobj=[{name:'jatin',age:'oad'},{name:'paras',age:8}]
  let obj={
    car:"BMW"
  }

  let product=[{
   
    pname:"laptop",
    pprice:1200,
    pbrand:'dell',
    pimg:img1
},
{
pname:"mobile",
    pprice:12005165,
    pbrand:'apple',
    pimg:img2
},
{
  pname:"bag",
    pprice:125600,
    pbrand:'de',
    pimg:img3
}]
  let brand='toyota'

  return (
    <>
     <h1>this is app page</h1>
     <h1>{obj.car}</h1>
     <h1>{brand}</h1>



     <ul>
      {
        arrofobj.map((e)=>(
          <li>{e.name}</li>
        ))
      }
     </ul>


     <hr />
     in table

     <table border="">
      <tr>
        <th>name</th>
        <th>age</th>   
      </tr>

      {
        arrofobj.map((e)=>(
          <tr>
            <td>{e.name}</td>
            <td>{e.age}</td>

          </tr>
        ))
      }
     </table>
<section style={{display:"flex",justifyContent:"space-around"}}>
  {
   product.map((e)=>(
    <div style={{border:"2px solid,black"}}>
      <img src={e.pimg} height="200px" />
      <h1>{e.pname}</h1>
      <h1>{e.pprice}</h1>
    </div>
   ))
  }
</section>
    </>
  )
}

export default App


// height={"200px"}