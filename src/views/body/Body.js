import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../custome/Preloader';

// code spliting
const HomePage = React.lazy(() => import('../pages/HomePage'));


const Body = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
};

export default Body;