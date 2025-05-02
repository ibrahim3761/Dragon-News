import React, { use } from 'react';
import { NavLink } from 'react-router';

const catagoryPromise = fetch("/categories.json").then(res=>res.json())


const Catagories = () => {
    const categories = use(catagoryPromise)
    
    return (
        <div>
            <h2 className='font-bold'>All Catagories ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category=><NavLink to={`/category/${category.id}`} className="text-accent rounded-xl hover:bg-base-200 hover:text-black hover:font-bold px-4 py-2 pl-20" key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Catagories;