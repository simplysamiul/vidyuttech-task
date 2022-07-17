import { useState } from 'react';
import '../../../styles/ProductDescription.css';

const ProductDescription = ({description}) => {
    const [productDescription, setProductDescription] = useState(true);
    const [review, setReview] = useState(false);
    // handel button
    const handelDescription = () =>{
        setProductDescription(true);
        setReview(false);
    };
    const handelReview = () =>{
        setReview(true);
        setProductDescription(false);
    }
    return (
        <div className='product-section-area'>
            <div className="produict-description-container">
                <div className="description-button">
                    <button className={`${productDescription  ? "product-description" : ""}`} onClick={handelDescription}>Description</button>
                    <button className={`${review  ? "product-review" : ""}`} onClick={handelReview}>Reviews (2)</button>
                </div>
                <div className="product-description-data">
                {productDescription && <div>
                    <p>{description}</p>
                    <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nobis quod quis nam! Rerum neque modi ipsum labore facere rem exercitationem porro saepe laborum itaque. Aperiam repellat eos, illum eligendi iste natus quibusdam eum voluptate. Obcaecati quod dolor doloremque tenetur dolores accusantium ex dignissimos! Maxime quisquam exercitationem doloribus necessitatibus quam non cumque ipsum sapiente. Fugit accusantium id explicabo aliquid quos, non nobis eos blanditiis laborum, maxime molestiae doloremque illo laudantium tenetur, molestias exercitationem odio fuga quod? Unde facilis sint sed?</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur quia a, nam perspiciatis tempora error eos voluptatibus officia commodi magni iste minima ad natus! Sint beatae ducimus cum repellat dolores. Dicta tempore velit sed molestias, laboriosam eveniet recusandae minima officiis omnis, ut nemo natus et totam? Labore, quas quam.</p>
                </div>}
                {review && <div className="product-review">
                        <h1>This is revieew section</h1>
                </div>}
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;