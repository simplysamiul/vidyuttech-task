import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../custome/Preloader';

const Body = () => {
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
                <Route path="/" element={<Preloader />} />
            </Routes>
        </Suspense>
    );
};

export default Body;