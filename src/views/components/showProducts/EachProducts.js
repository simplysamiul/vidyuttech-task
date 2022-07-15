import '../../../styles/EachProducts.css';

const EachProducts = ({product}) => {
    const {title, rating, price, image, description, category} = product;
    console.log(product)
    return (
        <div className='product-cart'>
            <div className="product-cart-img">
                <img src={image} alt="" />
            </div>
            <div className="product-cart-body">
                <h4>{title.substring(0, 20)} ...</h4>
                <h3>$ {price}</h3>
            </div>
        </div>
    );
};

export default EachProducts;