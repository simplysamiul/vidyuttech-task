import React, { useEffect, useState } from 'react';
import '../../../styles/AllProducts.css';
import Preloader from '../../custome/Preloader';
import EachProducts from './EachProducts';

const AllProducts = () => {
    // load all products
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(products)
    useEffect(() =>{
        setLoading(true)
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
    },[]);
    return (
        <>
            <div className="products-area">
                {loading ? <Preloader />
                :<div className="products-container">
                    {
                        products.map(product => <EachProducts 
                        key={product.id}
                        product={product}
                        />)
                    }
                </div>}
            </div>
        </>
    );
};

export default AllProducts;