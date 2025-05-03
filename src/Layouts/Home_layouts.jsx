import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const Home_layouts = () => {
    return (
        <div className='px-20'>
            <header>
                <Header></Header>
                <section  className='my-3'>
                    <LatestNews></LatestNews>
                </section>
                <section  className='my-3'>
                <Navbar></Navbar>
                </section>
                
            </header>
            <main className='grid grid-cols-12 my-10 gap-16'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home_layouts;