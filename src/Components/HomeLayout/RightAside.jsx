import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOut from './FindUsOut';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUsOut></FindUsOut>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;