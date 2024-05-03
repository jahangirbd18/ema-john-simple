import React, { useEffect, useState } from 'react';
import './Shop.css';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res=>res.json())
        // .then (data=>console.log(data))
        .then (data=>setProducts(data))
    },[]);

    const handleAddToCart = (product)=>{   
     console.log(product); 
    // Ager cart Array te joto upadan 
    // ache tar sathe new upadan(clicked) seta 
       //add korbe//
    // cart.push(product) er moto kaj korbe//
     const newCart=[...cart,product];   
     setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                     key={product.id}
                     product={product}
                    handleAddToCart={handleAddToCart}
        // Upper line makes event handler as a props item 
        // that wil send to <Product> component as props//            
                    ></Product>)
                }
                {/* <h3> This is for Products:{products.length}</h3> */}
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;