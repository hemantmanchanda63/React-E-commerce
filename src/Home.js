import React from 'react'
import FeaturedProduct from './components/FeaturedProduct';
import Herosection from './components/Herosection';
import Services from './components/Services';
import Trusted from './components/Trusted';


const Home = () => {
  const hello ={
    name:"Himanshu React Site",
  }
    return (
    <>
      <Herosection data={hello} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  )
}



export default Home

