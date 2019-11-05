import React from 'react';
import { Link } from 'react-router-dom';
import { GiAce } from 'react-icons/gi'
const Navbar = () => {
  return(
    <nav className='navbar bg-dark'>
      <h1>
      <GiAce/><Link to="/">21 CARD TRICK</Link>
      </h1>
      <ul>
        <li>
          <Link to="/"><strong>Home</strong></Link>
        </li>
        <li>
          <Link to='/about'><strong>About</strong></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
