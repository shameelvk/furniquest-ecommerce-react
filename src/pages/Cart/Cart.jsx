import React from 'react';
import './Cart.css'

const Cart = () => {
    // const {productData,cartItems,removeFromCart,getTotalCartAmount,addToCart,removeProductFromCart,clearAllCart}=useContext(ShopContext)
 

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
                        <tr >
                                        <td><img src={""} alt={""} style={{ width: '100px' }} /></td>
                                        <td className='p-2'>{""}</td>
                                        <td>${}</td>
                                        <td>{}</td>
                                       <td> 
                                        <button className="btn btn-dark mx-2" onClick={() =>""}>+</button>
                                        <button className="btn btn-dark" onClick={() => ""}>-</button>
                                       </td>
                                        <td>${}</td>
                                        <td><button className="btn btn-danger" >Remove</button></td>
                                    </tr>
                                  
                            
                        </tbody>
                    </table>
                </div>
                <div className='row align-items-center mt-3'>
                    <div className="col-md-6 col-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2 ">Cart Total Details</h5>
                                <hr />
                                <p className=''>Subtotal: ${12}</p>
                                <hr />
                                <p>Shipping Fee: Free</p>
                                <hr />
                                <p>Total: ${200}</p>
                                <hr />
                                <button className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                                <button className="btn btn-danger btn-block pay-btn mx-2" onClick={()=>clearAllCart()}>Clear All</button>
                            
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
