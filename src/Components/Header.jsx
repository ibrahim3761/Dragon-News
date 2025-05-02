import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-10'>
           <img className='w-[400px]' src={logo} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p>
           <p className='font-semibold '> <span>{format(new Date(),"EEEE,")}</span> <span className='text-accent'>{format(new Date(),"MMMM dd,yyyy")}</span></p>
        </div>
    );
};

export default Header;