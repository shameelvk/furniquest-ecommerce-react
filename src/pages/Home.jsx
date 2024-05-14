import React from 'react'
import Banner from '../components/Banner/Banner'
import OfferImages from '../components/OfferImages/OfferImages'
import BestSeller from '../components/BestSeller/BestSeller'
import ProductNavigation from '../components/ProductNavigation/ProductNavigation'

const Home = () => {
  return (<>
   <ProductNavigation/>
   <Banner/>
   <OfferImages/>
   <BestSeller/>
  </>
   
   
  )
}

export default Home