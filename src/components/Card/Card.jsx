import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card({pdData}) {
    console.log(pdData);
    
  return (
    <div className="card pd-card">
      <img src={pdData.image.url} className="card-img-top pd-image p-2" alt={""} />
      <div className="card-body">
        <h5 className="card-title">{pdData.name}</h5>
        <p dangerouslySetInnerHTML={{__html: pdData.description}} className='card-text card-description'/>
        <p className="card-text">MRP:₹{pdData.price.raw}<del className="text-danger ms-2">${(pdData.price.raw * 1.2).toFixed(2)}</del></p>
        <p className='deliver'><strong>Free Delivery By FurniQuest</strong></p>
        <Link to={'/product/'+pdData.id}  className="btn btn-warning">View Product</Link>
      </div>
    </div>
  )
}

export default Card