import React from 'react';
import { GiAce } from 'react-icons/gi'
import { NavBar, UlNav, TextLight, Home, About } from "./Styles";

const Navbar = () => {

  return(
    <NavBar>
      <TextLight>
      <GiAce/><Home to="/">21 CARD TRICK</Home>
      </TextLight>
      <UlNav>
        <li>
          <Home to="/">Home</Home>
        </li>
        <li>
          <About to='/about'>About</About>
        </li>
      </UlNav>
    </NavBar>
  )
};
export default Navbar;
