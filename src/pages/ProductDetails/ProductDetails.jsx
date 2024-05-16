import React, { useState, useEffect ,useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../contexts/ShopContext';

function ProductDetails() {
    const { pdId } = useParams();
    const {addToCart,productData} = useContext(ShopContext)
    var oneProducts=productData.filter((product)=>{
        if(product.id==pdId){
            return product
        }
    }
    )

    return (
        <div className="container">
            {oneProducts.map((p)=>{
                return(
                    <div className="row align-items-center justify-content-center p-2 my-2">
                <div className="col-md-6 d-flex">
                    {p.image && <img src={p.image.url} className="img-fluid pd-img m-auto" alt="Product" style={{width:"70%"}} />}
                </div>
                <div className="col-md-6">
                    <h2>{p.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: p.description }} />
                    <p>Price: ₹{p.price?.raw}</p>
                    <button className="btn btn-warning" onClick={() => addToCart(p.id)}>Add to Cart</button>
                </div>
            </div>
                )
            })}
            
        </div>
    );
}

export default ProductDetails;
