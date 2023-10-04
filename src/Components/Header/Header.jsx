// import PropTypes from 'prop-types';

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/authProvider";

const Header = () => {
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      console.log(" successfully logged out");
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  const {user, logOut}= useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/registration">Registration</NavLink>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {
          user ?
          <>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          </>
          :
          <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
           </li>
          </>
        }   
    </ul>
  </div>
  <div className="navbar-end">
    {
      user 
      ? <> <span className="mr-4 px-4 py-1 border-[3px] border-gray-300 rounded-lg">{user.email}</span> 
           <a onClick={handleLogOut} className="btn">Sign Out</a>
        </> 
      : <> <NavLink to="/login"><button className="btn">Log In</button></NavLink> </>
    }
  </div>
</div>
    );
};

Header.propTypes = {
    
};

export default Header;