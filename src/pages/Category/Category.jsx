import React from 'react'
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'
import {useParams}from 'react-router-dom'
import { useState,useEffect } from 'react';
import Card from '../../components/Card/Card';
function Category() {

    const [products, setProducts] = useState([]);
    const {catId}=useParams();
     const [displayName, setDisplayName] = useState("")

    useEffect(() => {
        const fetchData = () => {
          fetch('https://api.chec.io/v1/products?limit=26', {
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
            setProducts(data.data);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
        };
    
        fetchData();
      }, []);
     var filteredProduct=products.filter((p)=>{
        
        if(p.categories[0].id==catId){
            return p;
        }

     })
     const categoryName = filteredProduct.length > 0 ? filteredProduct[0].categories[0].name : "";

  return (
    <>
    <ProductNavigation/>
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <h2 className="text-center mb-4">{categoryName}</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredProduct.map((p) => (
          <div className="col" key={p.id}>
            <Card pdData={p} />
          </div>
        ))}
      </div>
    </div>
    </>
   
  )
}

export default Category