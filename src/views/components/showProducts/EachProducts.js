import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import '../../../styles/EachProducts.css';


const EachProducts = ({product}) => {
    const {title, rating, price, image, id, category} = product;
    return (
        <div className='product-cart'>
            <div className="product-cart-img">
            <Link to={`/product_details_${id}`}><img src={image} alt="" /></Link>
            </div>
            <div className="cart-icon">
                    <Link to={`/product_details_${id}`}>
                    <button title='Quick View'>
                    <i><AiOutlineEye /></i>
                    </button>
                    </Link>
                    <button title='Add Wish List'>
                    <i><BsHeart /></i>
                    </button>
                    <button title='Add to cart'> 
                    <i><BsCartPlus /></i>
                    </button>
            </div>
            <div className="product-cart-body">
                <h4>{title.substring(0, 20)} ...</h4>
                <div className="price-rating">
                    <h3>$ {price}</h3>
                    <Rating
                    readonly
                    initialValue={rating.rate}
                    size="20px"
                    />
                </div>
                <p>{category}</p>
            </div>
        </div>
    );
};

export default EachProducts;