import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='py-10 px-20 bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main className='flex mx-auto justify-center'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;