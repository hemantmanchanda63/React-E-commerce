import React from 'react'
import Herosection from './components/Herosection';

const Home = () => {
  const hello ={
    name:"Himanshu React Site",
  }
    return (
    <>
      <Herosection data={hello} />
    </>
  )
}



export default Home

