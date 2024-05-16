import React, { useState, useEffect } from 'react';
import './Cart.css';
import { useCartCount } from '../../contexts/CartCountContext';

const Cart = () => {
    const [cartData, setCartData] = useState({});
    const {updateCartCount}=useCartCount();


    useEffect(() => {
        const getCartData = async () => {
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

                const cartsData = await response.json();
                console.log(cartsData.line_items);
                setCartData(cartsData);
                
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        getCartData();
    }, []);

    

    const quantityChangeFromCart = async (itemId,qunti) => {
        const cartId = 'cart_kpnNwAO9Og5mXB'; 
        console.log(itemId);
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: qunti
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to decrease cart item quantity');
            }
            const data=await response.json();
            updateCartCount(data.total_unique_items)
            setCartData(data);
           
    
            console.log('Cart item quantity decreased successfully');
        } catch (error) {
            console.error('Error decreasing cart item quantity:', error);
        }
    };


    const deleteProductFromCart = async (itemId) => {
        const cartId = 'cart_kpnNwAO9Og5mXB'; 
        console.log(itemId);
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
                    'Content-Type': 'application/json'
                },
                
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete cart item ');
            }
            const data=await response.json();
            updateCartCount(data.total_unique_items)
            setCartData(data);
           
    
            console.log('Cart item deleted successfully');
        } catch (error) {
            console.error('Error deleteing cart item ', error);
        }
    };
    const clearAllCart = async () => {
        const cartId = 'cart_kpnNwAO9Og5mXB'; 
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
                    'Content-Type': 'application/json'
                },
                
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete cart item ');
            }
            const data=await response.json();
            updateCartCount(data.total_unique_items)
            setCartData(data);
            console.log(data);
           
    
            console.log('Cart item deleted successfully');
        } catch (error) {
            console.error('Error deleteing cart item ', error);
        }
    };

    return (
        <div className='container p-2'>
            <div className='row m-2'>
                <div className='col-12  table-responsive'>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col text-center">Actions</th>
                                <th scope="col">Total</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.line_items && cartData.line_items.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td>
                                            <img src={product.image.url} alt={""} style={{ width: '100px' }} />
                                        </td>
                                        <td className='p-2'>{product.name}</td>
                                        <td>₹{product.price.raw}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <button className="btn btn-dark mx-2" onClick={() => quantityChangeFromCart(product.id,product.quantity+1)}>+</button>
                                            <button className="btn btn-dark" onClick={() => quantityChangeFromCart(product.id,product.quantity-1)}>-</button>
                                        </td>
                                        <td>₹{product.line_total && product.line_total.raw}</td>
                                        <td><button className="btn btn-danger" onClick={()=>deleteProductFromCart(product.id)} >Remove</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='row align-items-center mt-3'>
                    <div className="col-md-6 col-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2 ">Cart Total Details</h5>
                                <hr />
                                <p className=''>Subtotal: ₹{cartData.subtotal && cartData.subtotal.raw}</p>
                                <hr />
                                <p>Shipping Fee: Free</p>
                                <hr />
                                <p>Total: ${cartData.subtotal && cartData.subtotal.raw}</p>
                                <hr />
                                <button className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                                <button className="btn btn-danger btn-block pay-btn mx-2" onClick={() => clearAllCart()}>Clear All</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="input-group">
                            <input type="text" className="form-control promocode-input" placeholder="Enter Promo Code" />
                            <button className="btn btn-secondary promocode-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
