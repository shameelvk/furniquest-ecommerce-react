import React from 'react'
import top_categories from './images/top-categories.png'
import star_sale from './images/star-sale.png'
import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.png'
import p4 from './images/p4.jpg'
import p5 from './images/p5.png'
import p6 from './images/p6.jpg'

import p4A from './images/p4A.png'
import p4B from './images/p4B.png'
import p4C from './images/p4C.png'
import p4D from './images/p4D.png'
import p4E from './images/p4E.png'
import p4F from './images/p4F.png'

function OfferImages() {
  return (
    <div className='container'>
      <div className="offer-banner">
        
        <img src={star_sale} alt="Offer Banner" className="img-fluid" />
      </div>

      <div className="container">
        <div className="row justify-content-center m-2">
        
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4A} alt="Offer 1" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4B} alt="Offer 2" className="img-fluid" />
          </div>

         
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4C} alt="Offer 3" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4D} alt="Offer 1" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4E} alt="Offer 2" className="img-fluid" />
          </div>

         
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4F} alt="Offer 3" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="offer-banner">
        
        <img src={top_categories} alt="Offer Banner" className="img-fluid" />
      </div>

      <div className="container">
        <div className="row justify-content-center m-2">
          
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p1} alt="Offer 1" className="img-fluid" />
          </div>

          
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p2} alt="Offer 2" className="img-fluid" />
          </div>

          
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p3} alt="Offer 3" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p4} alt="Offer 1" className="img-fluid" />
          </div>

          
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p5} alt="Offer 2" className="img-fluid" />
          </div>

          
          <div className="col-md-4 col-sm-6 col-12 text-center mb-4">
            <img src={p6} alt="Offer 3" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferImages