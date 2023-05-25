import { useState } from "react"
import Header from "../components/Header"
import Swal from "sweetalert2"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import http from "../http"




    export default function RegisterPage(){
        const [email, setEmail] = useState("")
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        const [error, setError] = useState("")
        const navigate = useNavigate()
      
        async function submitHandler(e) {
          e.preventDefault()
          if (!email || !username || !password) {
            setError("please fill all fields!")
            return;
      
          }
          if (password.length < 4){
            setError("Password must be atleast 4 characters")
            return;
          }
          //  Swal.fire("Error" ,"wronginfor","error")
          if (confirmPassword !== password) {
            setError("Passwords do not match")
            return
          }
          const { data } = await http.post("/users/register",{ email, username, password })
          if (data.error){
            setError(data.error)
          }
          if (data.success) {
            navigate("/login")
            Swal.fire("Done", data.success, "success")
          }
        }
    return<>
    <Header></Header>
 

    <div className="login row ">
      <form onSubmit={submitHandler} action="" className="form col-lg-7 col-sm-12 p-3">

        <h2 className="mb-3 text-center">Register</h2>
        {error && <div className="alert alert-danger p-2 my-2">{error}</div>}
        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control mb-3 " placeholder="Email Address" />
        <input onChange={e => setUsername(e.target.value)} type="text" className="form-control mb-3 " placeholder="Username" />
        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control mb-3" placeholder="Password" />
        <input onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control mb-3" placeholder="Confirm Password" />
        <input type="checkbox" /> Agree to our privacy policy
        <button className="form-control mb-3 btn btn-primary">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>

      </form>
    </div>
  
    </>
}