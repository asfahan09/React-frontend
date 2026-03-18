import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestFeatured from '../components/LatestFeatured'

function Home() {
  return (
    <div>
  <Header></Header>
  <Hero></Hero>
  <FeaturedProducts></FeaturedProducts>
  <LatestFeatured></LatestFeatured>
  <Footer></Footer>
    </div>
  
  )
}

export default Home