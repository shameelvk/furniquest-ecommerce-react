import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const [productDetails, setProductDetails] = useState({});
    const { pdId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.chec.io/v1/products/' + pdId, {
                    method: 'GET',
                    headers: {
                        'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProductDetails(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [pdId]);

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center p-2 my-2">
                <div className="col-md-6 d-flex">
                    {productDetails.image && <img src={productDetails.image.url} className="img-fluid pd-img m-auto" alt="Product" style={{width:"70%"}} />}
                </div>
                <div className="col-md-6">
                    <h2>{productDetails.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: productDetails.description }} />
                    <p>Price: ₹{productDetails.price?.raw}</p>
                    <button className="btn btn-warning" onClick={() => addToCart(productData.id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
