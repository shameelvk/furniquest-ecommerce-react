import React from 'react'
import { useEffect,useState,useContext } from 'react';
import Card from '../Card/Card';
import { ShopContext } from '../../contexts/ShopContext';

function BestSeller() {
  const {productData} = useContext(ShopContext)

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col text-center">
          <h2>Best Sellers</h2>
        </div>
      </div>
      <div className="row g-2">
      {
  productData.slice(0, 9).map((p, index) => {
      return (
        <div className="col-md-4" key={index}>
          <Card pdData={p} />
        </div>
      );
    })
}
        
      </div>
    </div>
  )
}

export default BestSeller