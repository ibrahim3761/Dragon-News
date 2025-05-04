import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error,setError] =  useState("")
  const{logIn} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  
  const handleLogin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email,password)
    .then((result) => {
        // Signed in 
        const user = result.user;
        //console.log(user);
        navigate(`${location.state? location.state : "/"}`)
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        setError(errorCode)
      });
  }  
    
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl font-semibold">Login your account</h1>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" required/>
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="text-center py-4">Dont’t Have An Account ? <Link to="/auth/register"><span className="text-secondary">Register</span></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
