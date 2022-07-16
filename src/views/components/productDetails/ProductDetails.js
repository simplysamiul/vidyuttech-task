import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Magnifier from "react-magnifier";
import '../../../styles/ProductDetails.css';

const ProductDetails = () => {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({});
    const {title, rating, description, image, price, category} = productDetails;
    console.log(rating.rate);
    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data))
    },[id]);
    return (
        <div className='product-details-area'>
            <div className="product-details-container">
                <div className="product-details-data">
                    <div className="product-details-left">
                    <Magnifier mgShowOverflow="hidden" src={image} width={500} />
                    </div>
                    <div className="product-details-right">
                        <h2>{title}</h2>
                        <h3>$ {price}</h3>
                        <h4><FaEye /> 
                        <span>32 guests are viewing this product</span>
                        </h4>
                        <div className="rating">
                        <Rating
                        readonly
                        initialValue={rating}
                        size="20px"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;