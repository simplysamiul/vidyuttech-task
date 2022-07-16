import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../custome/Preloader';

// code spliting
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ProductDetails = React.lazy(() => import('../components/productDetails/ProductDetails'));


const Body = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/product_details_:id" element={<ProductDetails />} />
            </Routes>
        </Suspense>
    );
};

export default Body;