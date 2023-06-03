import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios"
import http from "../http"
import { useNavigate } from "react-router-dom";
export default function ProfilePage() {
    const[username,setUsername]=useState("")
    const[image,setImage]= useState()
    const[password,setPassword]=useState()
    const[confirmPassword,setConfirmPassword]=useState()
    const[error, setError]= useState("")
    const navigate = useNavigate()
    const[btcWallet,setBtcWallet] = useState("")
    const[ethWallet,setEthWallet] = useState("")
    const userInfo = JSON.parse (localStorage.getItem("userInfo"))
    async function SubmitHandler(e){
        e.preventDefault()
        if ( password && password.length < 4){
            setError("password must be atleast four characters long")
            return;
        }
        if (password !== confirmPassword){
            setError("password do not match")
            return;
        }
        const {data} =  await http.put(`/users/${userInfo._id}`,{username, image, password,btcWallet,ethWallet})
        if (data.error){
            setError(data)
        }
        if (data.success){
        localStorage.setItem("userInfo", JSON.stringify(data.user))
            Swal.fire("Done",data.success,"successfully saved")
            window.location.reload()
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
    useEffect(()=>{
        setUsername(userInfo.username)

    },[])
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
                        <h2 className="text-center mb-5">UPDATE PROFILE</h2>
                        <form onSubmit={SubmitHandler}>
                            {error && <div className="class alert alert-danger my-3 p-3">{error}</div> }
                            <img className="profile-picture" src={userInfo.image} alt="" />
                            <h4  className="my-3 "> BTC Wallet : {userInfo.btcWallet} </h4>
                            <h4  className="my-3"> ETh Wallet : {userInfo.ethWallet} </h4>
                            {/* Email input */}
                          
                            {/* Password input */}
                            <div className="form-outline mb-2">
                                <input   onChange={uploadImage}type="file" id="form1Example2" className="form-control" accept="image/*" />
                                <label className="form-label" htmlFor="form1Example2">Profile PIcture</label>
                            </div>
                            <div className="form-outline mb-2">
                                <input  onChange={ e =>setUsername(e.target.value)} value={username}type="text" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">Update profile </label>
                            </div>
                            <div className="form-outline mb-2">
                                <input   onChange={ e => setPassword(e.target.value)} type="Password" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Change Password</label>
                            </div>
                            <div className="form-outline mb-2">
                                <input   onChange={ e => setConfirmPassword(e.target.value)}type="Password" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Confirm Password</label>
                            </div>
                            <div className="form-outline mb-2">
                                <input   onChange={ e =>setBtcWallet(e.target.value)} value={btcWallet} type="text" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Bitcoin wallet</label>
                            </div>
                            <div className="form-outline mb-2">
                                <input   onChange={ e => setEthWallet(e.target.value)}  value={ethWallet} type="text" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Ethereum wallet</label>
                            </div>
                            

                            {/* Submit button */}
                            <button  type="submit" className="btn btn-primary btn-block w-100 form-control">Update Information</button>
                        </form>

                    </main>

                </div>
            </div>
        </div>
    </>
}