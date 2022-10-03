import React from 'react'
import Herosection from './components/Herosection';

const Home = () => {
  const hello ={
    name:"Himanshu React Site",
  }
    return (
    <>
    Hello this is Himanshu 
      <Herosection data={hello} />
      hell this is hell
    </>
  )
}

export default Home

