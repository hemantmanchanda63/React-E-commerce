import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/">
        <h1>Himanshu</h1>
      </NavLink>
      <Nav />
    </Mainheader>
  );
};

export default Header;

const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h1 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid black;
  }
  .logo {
    height: 5rem;
  }
`;
