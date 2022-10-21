import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const PageNavigation = (props) => {
    const {title}= props;

    
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink> / {title}
    </Wrapper>
  )
}

export default PageNavigation

const Wrapper = styled.section`
height:6rem;
background-color: ${({theme}) => theme.colors.bg};
display:flex;
justify-content:flex-start;
font-size:3.2rem;
padding-left:4.2rem;


a{
    font-size:3.2rem;
}`