import React from 'react'
import { useEffect,useState } from 'react';
import Card from '../Card/Card';

function BestSeller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          fetch('https://api.chec.io/v1/products?limit=9', {
            method: 'GET',
            headers: {
              'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6' 
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            return response.json();
          })
          .then(data => {
            setProducts(data.data); // Assuming the products are under the 'data' key in the response
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
        };
    
        fetchData();
      }, []);
      console.log(products);
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col text-center">
          <h2>Best Sellers</h2>
        </div>
      </div>
      <div className="row g-2">
        {
            products.map((p)=>{
                return  <div className="col-md-4">
                <Card pdData={p}/>
              </div>
            })
        }
       
        
      </div>
    </div>
  )
}

export default BestSeller