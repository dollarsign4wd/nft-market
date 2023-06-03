import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios"
import http from "../http"
import { useNavigate } from "react-router-dom";
export default function SubmitCollectionPage() {
    const[title,setTitle]=useState("")
    const[price,setPrice]= useState()
    const[image,setImage]=useState()
    const[description,setDescription]=useState()
    const[error, setError]= useState("")
    const navigate = useNavigate()

    const userInfo = JSON.parse (localStorage.getItem("userInfo"))
    async function SubmitHandler(e){
        e.preventDefault()
        if (!image){
            setError("Please Select An Avatar")
            return
        }
        if(!title || !price || !description){
            setError("please fill all field")
            return;
        }
        const {data} =  await http.post("/collections",{title, image,price ,description, owner : userInfo._id})
        if (data.error){
            setError(data)
        }
        if (data.success){
            navigate("/dashboard")
            Swal.fire("Done",data.success,"successfully saved")
        }
    }
    async function uploadImage(e){
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append ("upload_preset" , "dollarsign")
        data.append("cloud_name" , "ddqg9lwgo")
        try {
            const result = await axios.post("https://api.cloudinary.com/v1_1/ddqg9lwgo/image/upload",data)
            Swal.fire("image approved, proceed to save your NFt")
     setImage(result.data.secure_url)
        } catch (error) {
            Swal.fire(error.message)
            
        }
    }
    return <>
        <div>
            {/* Banner */}

            {/* Dashboard */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                {/* Vertical Navbar */}
                <Sidebar></Sidebar>
                {/* Main content */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* Header */}
                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0 pb-5">
                                        {/* Title */}
                                        <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                                    </div>

                                </div>
                                {/* Nav */}

                            </div>
                        </div>
                    </header>
                    {/* Main */}
                    <main className="p-3 bg-surface-secondary">
                        <h2 className="text-center mb-5">SUBMIT COLLECTION</h2>
                        <form onSubmit={SubmitHandler}>
                            {error && <div className="class alert alert-danger my-3 p-3">{error}</div> }
                            {/* Email input */}
                            <div className="form-outline mb-2">
                                <input  onChange={ e =>setTitle(e.target.value)}type="text" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">Collection title</label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-2">
                                <input   onChange={uploadImage}type="file" id="form1Example2" className="form-control" accept="image/*" />
                                <label className="form-label" htmlFor="form1Example2">Collection Avatar</label>
                            </div>
                            <div className="form-outline mb-2">
                                <input   onChange={ e => setPrice(e.target.value)}type="number" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Collection price</label>
                            </div>
                            <div class="form-outline mb-4">
                                <textarea  onChange={ e =>setDescription(e.target.value)} class="form-control" id="form6Example7" rows="4"></textarea>
                                <label class="form-label" for="form6Example7">Collection Description</label>
                            </div>

                            {/* Submit button */}
                            <button  type="submit" className="btn btn-primary btn-block w-100 form-control">Submit collection</button>
                        </form>

                    </main>

                </div>
            </div>
        </div>
    </>
}