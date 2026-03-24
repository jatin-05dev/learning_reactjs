import axios  from 'axios'
import { useEffect, useState } from 'react'
function Fetch(){
  let [apidata,set]=useState([])
  let[se,setshow]=useState(false)
  let[edit,setedit]=useState(false)

useEffect(()=>{
 axios.get('http://localhost:3000/userdata')
 .then((res)=>set(res.data)
 )
},[delet])
  
function delet(id) {
  axios.delete(`http://localhost:3000/userdata/${id}`)
    .then((res) => {
      alert("Data Deleted Successfully")
      // Fetch()   
    })
    .catch((err) => {
      console.log(err);
    });
}


function editinput(e) {
  const{name,value}=e.target
  setedit({...edit,[name]:value})
}

 function final(e) {
  e.preventDefault()
  axios.put(`http://localhost:3000/userdata/${edit.id}`,edit)
  .then((e)=>alert("update...."))
  
 }
 

 

  return (
    <>

    <table border="">
      <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>city</th>
      <th>contact</th>
      <th>delete</th>
      <th>edit</th>


      </tr>
      {
        apidata.map((e)=>{
         return <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.contact}</td>
            <td><button onClick={()=>delet(e.id)}>delete_data</button></td>
            <td><button onClick={()=>(setshow(true),setedit(e))}>edit</button></td>
          </tr>
})
      }
    </table>
      
      {
        se && <form action="" onSubmit={final}>
          <label htmlFor="">id</label>
          <input type="text"  value={edit.id}/><br />

           <label>Name</label>
        <input type="text" name="name" value={edit.name} onChange={editinput}  />
        <br />

        <label>Age</label>
        <input type="text" name="age" value={edit.age} onChange={editinput}/>
        <br />

        <label>City</label>
        <input type="text" name="city" value={edit.city} onChange={editinput}  />
        <br />

        <label>Contact</label>
        <input type="text" name="contact" value={edit.contact} onChange={editinput} />
        <br />

          <input type="submit" />
        </form>
      }
    </>
  )

}
export default Fetch
