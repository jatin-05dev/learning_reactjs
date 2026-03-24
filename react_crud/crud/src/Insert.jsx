 import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Insert() {
   let nav=useNavigate()
  let [frmdata, setfrmdata] = useState({
    name: "",
    age: "",
    city: "",
    contact: ""
  })

  function inputdata(e) {
    let { name, value } = e.target
    setfrmdata({ ...frmdata, [name]: value })
  }

  function submit(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/userdata", frmdata)
      .then(() => alert("Success..."))
      nav('./Fetch')
      .catch(() => alert("Error"))
  }

  return (
    <>
      <h1>hello i am insert</h1>

      <form onSubmit={submit}>
        <label>Name</label>
        <input type="text" name="name" onChange={inputdata} />
        <br />

        <label>Age</label>
        <input type="text" name="age" onChange={inputdata} />
        <br />

        <label>City</label>
        <input type="text" name="city" onChange={inputdata} />
        <br />

        <label>Contact</label>
        <input type="text" name="contact" onChange={inputdata} />
        <br />

        <input type="submit" />
      </form>
    </>
  )
}

export default Insert
