import React from 'react';
import { Link } from 'react-router-dom';
import { GiAce } from 'react-icons/gi'
const Navbar = () => {
  return(
    <nav className='navbar bg-dark'>
      <h1>
      <GiAce/>21 Card Trick
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
