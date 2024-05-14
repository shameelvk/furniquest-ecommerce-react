import React, { useState,useEffect } from 'react'
import {NavLink} from 'react-router-dom' 


function ProductNavigation() {
  const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          fetch('https://api.chec.io/v1/categories', {
            method: 'GET',
            headers: {
              'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6' 
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch category');
            }
            return response.json();
          })
          .then(data => {
            setCategory(data.data); 
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
        };
    
        fetchData();
      }, []);
      console.log(category);


  return (
    <div className="container-fluid  border-top">
      <div className="row">
        <div className="col-2 d-none d-lg-block"></div>
        <div className="col-lg-8 col-12 d-flex flex-nowrap overflow-auto">
          <div className="d-flex justify-content-center flex-wrap">
            {category.map((cat)=>{
              return <NavLink to={"/category/" + cat.id} className="nav-link text-center p-3 fw-bolder" activeClassName="active">{cat.name}</NavLink>
            })}
            </div>
        </div>
        <div className="col-2 d-none d-lg-block"></div>
      </div>
    </div>
  )
}

export default ProductNavigation