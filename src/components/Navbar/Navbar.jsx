import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/cart_icon.png';
import './Navbar.css';
import { useCartCount } from '../../contexts/CartCountContext';

const Navbar = () => {
   
   const {cartCount,updateCartCount}=useCartCount();
   

    useEffect(() => {
        const getTotalCartItem = async () => {
            try {
                const response = await fetch('https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB', {
                    method: 'GET',
                    headers: {
                        'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch cart data');
                }

                const cartData = await response.json();
                const totalCartItem = cartData.total_unique_items;
                updateCartCount(totalCartItem)
               
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        getTotalCartItem();
    }, []); 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FurniQuest</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/products'} className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/About-us'} className="nav-link">About Us</NavLink>
                        </li>
                    </ul>
                    {/* <form className="d-flex mx-auto my-2 my-lg-0 nav-search">
    <input 
        className="form-control me-2 search-input" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        onChange={($e) => {
            setSearchText($e.target.value);
        }} 
    />
    <button className="btn btn-outline-success search-button" type="button">
        Click
       </button>
</form> */}

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/contact-us'} className="nav-link">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/login'} className="nav-link">Login / Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/cart'} className="nav-link cart-nav">
                                <img src={cartIcon} alt="" style={{ width: "2vw" }} className='cart-img' />
                                <div className="cart-count">
                                    {cartCount}
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
