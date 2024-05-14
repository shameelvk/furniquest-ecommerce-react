import React from 'react'
import banner1 from './images/freedom-sales.jpg'
import banner2 from './images/diwali.avif'
import coupen from './images/signup.avif'
import './Banner.css'

function Banner() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active h-100" data-bs-interval="1000">
                        <img src={banner1} className="d-block w-100 img-fluid banner-img" alt="..." />
                    </div>
                    
                   

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <img src={coupen} alt="" className='img-fluid w-100 my-2'/>
    </>
  )
}

export default Banner