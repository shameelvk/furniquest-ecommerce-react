import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react';
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'
import Card from '../../components/Card/Card';
function Productes() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          fetch('https://api.chec.io/v1/products', {
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
    <>
     <ProductNavigation/>
    <div className="container py-4">
    <div className="row">
      <div className="col">
        <h2 className="text-center mb-4">Products</h2>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    {
            products.map((p)=>{
                return  <div className="col">
                <Card pdData={p}/>
              </div>
            })
        }
      
    </div>
  </div>
    </>
   
  )
}

export default Productes