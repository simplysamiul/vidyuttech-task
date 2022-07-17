import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Magnifier from "react-magnifier";
import '../../../styles/ProductDetails.css';
import Preloader from '../../custome/Preloader';
import SizeModal from '../../custome/Modal';

const ProductDetails = () => {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [loading, setLoading] = useState(false)
    const {title, rating, description, image, price, category} = productDetails;
    console.log(productDetails);
    useEffect(() =>{
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data))
        setLoading(false);
    },[id]);
    return (
        <div className='product-details-area'>
            {loading ? <Preloader />
            :<div className="product-details-container">
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
                        <p className='categories'>Categories : {category}</p>
                        {category ==="men's clothing" && <div className='size-category'>
                        <div>
                        <p>Size : </p>
                        <span style={{marginLeft: "0"}} className='size-tag'>L</span>
                        <span className='size-tag'>M</span>
                        <span className='size-tag'>S</span>
                        <span className='size-tag'>XL</span>
                        </div>
                        <SizeModal />
                        </div>}
                        {category ==="women's clothing" && <div className='size-category'>
                        <div>
                        <p>Size : </p>
                        <span style={{marginLeft: "0"}} className='size-tag'>L</span>
                        <span className='size-tag'>M</span>
                        <span className='size-tag'>S</span>
                        <span className='size-tag'>XL</span>
                        </div>
                        <SizeModal />
                        </div>}
                        <div className="buy-button">
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ProductDetails;