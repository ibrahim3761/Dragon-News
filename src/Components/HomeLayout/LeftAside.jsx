import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-xs"></span>}>
            <Catagories></Catagories>
           </Suspense>
        </div>
    );
};

export default LeftAside;