import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (

    <div className="navbar">

      <header className="app-header">
        <h1>CryptoCurrent</h1>

        <div className="navbar-links">

          <ul>

            <li className="navLink">
              <Link to="/historical">Historical</Link>
            </li>

            <li className="navLink">
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </li>

            <li className="navLink">
              <Link to="/exchanges">Exchanges</Link>
            </li>

            <li className="navLink">
              <Link to="/test">Test</Link>
            </li>

          </ul>
        </div>
      </header>



    </div>
  )
}

export default NavBar;
