import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")



    async function submitHandler(e) {
        e.preventDefault()
        if (!email || !password) {
            setError("please fill all field")
            return;
        }

        const { data } = await axios.post("http://localhost:5000/api//users/login", { email, password })
        if (data.error) {
            setError(data.error)
        }
        if (data.success) {
            Swal.fire("Done", data.success, "success")
        }

    }


    return <>
        <div className="login row ">
            <img style={{ height: "28rem" }} className="col-lg-5 col-sm-12" src=" https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0=" alt="" />
            <form onSubmit={submitHandler} action="" className="form col-lg-7 col-sm-12  p-3">
                <h2 className="mb-3 text-center">Login</h2>
                {error && <div className="alert alert-danger p-2 my-2">{error}</div>}
                <input onChange={e => setEmail(e.target.value)} type="text" className="form-control mb-3 " placeholder="Email" />
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control mb-3" placeholder="Password" />
                <button  className="form-control mb-3 btn btn-primary">login</button>
                <p>Dont have an account, <Link to="/register">Register</Link></p>

            </form>
        </div>
    </>
}
