import React from 'react'
import {useSearchParams} from 'react-router-dom'
import { useEffect,useState,useContext } from 'react';
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'
import Card from '../../components/Card/Card';
import { ShopContext } from '../../contexts/ShopContext';
function Productes() {

    const {productData} = useContext(ShopContext)
    const [searchParams]=useSearchParams();
    var searchValue=searchParams.get("search");

console.log(productData);
    const filteredProducts = productData.filter((p) => p.name.toLowerCase().includes(searchValue?searchValue.toLowerCase():""));

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
            filteredProducts.map((p)=>{
                return  <div className="col" key={p.id}>
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