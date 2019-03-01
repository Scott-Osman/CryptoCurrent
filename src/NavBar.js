import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
      </ul>

    </header>
  )
}

export default NavBar;