import React from 'react'
import Herosection from '../components/Herosection'
import { useProductContext } from '../context/Productcontext'


const About = () => {
  const {myName} = useProductContext()
   
  const hello ={
    name:"Himanshu E-commerce Store",
  }
  return (
    <>
      <Herosection data={hello} />
      {myName}
    </>
  )
}

export default About
