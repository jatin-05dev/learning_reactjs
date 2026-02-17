 import axios  from 'axios'
import { useEffect, useState } from 'react'
function Fetch(){
  let [apidata,set]=useState([])
useEffect(()=>{
 axios.get('http://localhost:3000/userdata')
 .then((res)=>set(res.data)
 )
},[])

  return (
    <>

    <table border="">
      <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>city</th>
      <th>contact</th>
      </tr>
      {
        apidata.map((e)=>{
         return <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.contact}</td>
          </tr>
})
      }
    </table>
      
    </>
  )

}
export default Fetch
