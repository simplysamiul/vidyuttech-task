import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Magnifier from "react-magnifier";
import Preloader from '../../custome/Preloader';
import SizeModal from '../../custome/Modal';
import payment1 from '../../../assets/paymeny_icon/visa.svg';
import payment2 from '../../../assets/paymeny_icon/google_pay.svg';
import payment3 from '../../../assets/paymeny_icon/stripe.svg';
import payment4 from '../../../assets/paymeny_icon/master_card.svg';
import payment5 from '../../../assets/paymeny_icon/skrill.svg';
import payment6 from '../../../assets/paymeny_icon/apple_pay.svg';
import { FaShippingFast } from 'react-icons/fa';
import { FcTimeline } from 'react-icons/fc';
import '../../../styles/ProductDetails.css';

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
                        <div className="checkout-section">
                            <p>Secure checkout with</p>
                            <div className="payment-method">
                                <img src={payment1} alt="" />
                                <img src={payment2} alt="" />
                                <img src={payment3} alt="" />
                                <img src={payment4} alt="" />
                                <img src={payment5} alt="" />
                                <img src={payment6} alt="" />
                            </div>
                        </div>
                        <div className="delivary">
                            <p><span className='delivary-icon'><FaShippingFast /></span> <span>Free shipping over $320</span></p>
                            <p><span className='delivary-icon'><FcTimeline /></span> <span>Delivers in: 3-7 Working Days</span></p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ProductDetails;