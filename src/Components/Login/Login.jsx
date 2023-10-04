// import PropTypes from 'prop-types';
import googleIcon from "../../assets/images/google.png"
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/authProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const {signInUser,signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result=>{
      console.log(result.user);
      console.log('Successfully Logged In with Google!');
      navigate("/")
    })
    .catch(error=>{
      console.error(error.message);
      setError(error);
    })
  }

  const handleLogin = e =>{
    e.preventDefault();
    console.log('Login Button clicked!');
    const email =e.target.email.value;
    const password = e.target.password.value;
    console.log('email: ', email, "password: ", password);
    //Sign in user using firebase
    signInUser(email, password)
    .then(result=>{
      console.log(result.user);
      e.target.reset();
      console.log('Successfully Logged In!');
      navigate("/")
    })
    .catch(error =>{
      console.log(error.message);
      setError(error);
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:mx-[250px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            <p>New to this site? Please<NavLink to="/registration" className="underline text-blue-600 font-bold"> Register!</NavLink></p>
            <p className="mr-0 flex items-center font-semibold gap-2">
              <span>
              <span className="text-[20px] text-red-600">Lo</span>
              <span className="text-[20px] text-yellow-300">gin</span>
              </span>
              <span>
              <span className="text-[20px] text-green-500">Wi</span>
              <span className="text-[20px] text-blue-600">th </span>
              </span>
              <img onClick={handleGoogleSignIn} className="w-[40px] h-[40px]" src={googleIcon} alt="" /></p>
            {
             error && (
             <p className="text-[14px] text-red-600 font-semibold">
                 {`${error.message.split("Firebase:")[1]}`}
             </p>
              )
            }
            </form>
          </div>
        </div>
      </div>
    );
};

Login.propTypes = {
    
};

export default Login;