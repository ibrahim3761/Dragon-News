import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='mid flex gap-5 text-accent ml-44'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-2 items-center'>
                <img src={user} alt="user" />
                <button className='btn btn-primary px-10'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;