// import PropTypes from 'prop-types';

import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/authProvider";


const Registration = () => {
  const navigate = useNavigate();
    const {createUser} = useContext(AuthContext); //this line import AuthContext from AuthProvider. as the createUser inside AuthProvider is defined as a context, so we have to access the function using useContext
    console.log(createUser);
    const handleRegister = e =>{
        e.preventDefault();
      const name = e.target.name.value;
      const email =e.target.email.value;
      const password = e.target.password.value;
      console.log("name: ", name, 'email: ', email, "password: ", password);
      createUser(email, password)
      .then(result=>{
        console.log(result.user);
        console.log('Successfully Registered!');
        navigate("/login")

      })
      .catch(error=>{
        console.log(error.message);
      })
      //create user
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:mx-[250px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            <p>Already have an account? Please<NavLink to="/login" className="underline text-blue-600 font-bold"> Login!</NavLink></p>
            </form>
          </div>
        </div>
      </div>
    );
};

Registration.propTypes = {
    
};

export default Registration;