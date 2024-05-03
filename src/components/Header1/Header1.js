import React from 'react';
import logo from '../../images/Logo.svg';
import './Header1.css';
const Header1 = () => {
    return (
        <nav className='header1'>
            <img src={logo} alt=""/> 
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>            
             </div>
        </nav>
        
    );
};

export default Header1;