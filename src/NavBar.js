import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (

    <div className="navbar">

      <header className="app-header">
        <h1>Crypto Current</h1>
      </header>

      <div className="navbar-links">

        <span className="navLink">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </span>

        <br/>
        
        <span className="navLink">
          <Link to="/exchanges">Exchanges</Link>
        </span>

      </div>


    </div>
  )
}

export default NavBar;
