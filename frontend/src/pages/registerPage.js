import Header from "../components/Header"

export default function Register(){
    return<>
    <Header></Header>
<div>
  <h3 className="text-center text-white  my-3">REGISTER</h3>
  <form action className="form">
    <input type="Email" className="form-control mb-3" placeholder="Email Address" />
    <input type="Username" className="form-control mb-3" placeholder="Username" />
    <input type="Password" className="form-control mb-3" placeholder="Password" />
    <input type="Confirm Password" className="form-control mb-3" placeholder="Confirm Password" />
    <button className="w-100 btn btn-primary mb-3">Register</button>
    <p>Aready Have An Account <a href="login.html">Login</a></p>
  </form>
</div>

    </>
}