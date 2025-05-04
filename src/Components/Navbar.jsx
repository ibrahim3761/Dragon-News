import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log('Logged out successfully'))
      .catch(err => console.error(err));
  };

  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className=''>
        {/* You can put your logo or site name here */}
      </div>

      <div className='mid flex gap-5 text-accent ml-[160px]'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className='login-btn flex gap-2 items-center'>
        <img src={ `${user? user.photoURL : userIcon}`} alt="user" className="w-12 h-10 rounded-full" />
        {user ? (
          <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>
        ) : (
          <Link to="/auth/login">
            <button className='btn btn-primary px-10'>Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
