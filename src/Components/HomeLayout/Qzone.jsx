import React from 'react';
import swimming from "../../assets/swimming.png"
import playground from "../../assets/playground.png"
import classroom from "../../assets/class.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 py-4 px-2'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-3'>
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;