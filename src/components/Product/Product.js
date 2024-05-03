import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props)
    // From Shop.js event handler "handleAddToCart" is 
    // received as a props item//
    const{handleAddToCart}=props;
    const{name, img, seller, price,ratings}=props.product;
   
    return (
        <div className='product'>
            {/* <h2> This is Product</h2> */}
            <img src={img} alt=""></img>
           <div className='class-info'>
              <p className='product-name'>{name}</p>
              <p>Price:${price}</p>
              <p><small>Seller:{seller}</small></p>
              <p><small>Ratings:{ratings} stars</small></p>
           </div>
           {/* Use wraper below */}
           <button onClick={()=>props.handleAddToCart
            (props.product)}className='btn-cart'>
            <p className='btn-txt'> Add to Cart</p>
            {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            {/* onClick={handleAddToCart} */}
        </div>
    );
};

export default Product;