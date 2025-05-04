import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [agree, setAgree] = useState(true); // checkbox default is checked
  const {createUser,setUser,updateUser}=use(AuthContext)

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    if (!agree) {
      alert("You must accept the terms and conditions to register.");
      return;
    }

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
   // console.log(name, email, photo, password);
    createUser(email,password)
    .then(result=>{
        const user = result.user;
       // console.log(user);
        updateUser({displayNamne:name ,photoURL: photo})
        .then(() => {
          setUser({...user,displayNamne:name ,photoURL: photo});
          navigate("/")
        }).catch((error) => {
          // An error occurred
          // ...
          //console.log(error);
          setUser(user)
        });
    })
    .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl font-semibold">Register your account</h1>
              <form onSubmit={handleRegister}>
                <label className="label">Your Name</label>
                <input name="name" type="text" className="input" placeholder="Name" required />

                <label className="label">Photo URL</label>
                <input name="photo" type="url" className="input" placeholder="Photo URL" required />

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" required />

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <p>Accept terms and condition</p>
                </div>

                <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
                <p className="text-center py-4">
                  Already Have An Account?{" "}
                  <Link to="/auth/login">
                    <span className="text-secondary">Login</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
