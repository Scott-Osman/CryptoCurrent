import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (

    <div className="navbar">

      <header className="app-header">
        <img src={require('./images/Logo.png')} alt=""/>
        <Link to="/"><h1>CryptoCurrent</h1></Link>

        <div className="navbar-links">

          <ul>

            <li className="navLink">
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </li>

            <li className="navLink">
              <Link to="/exchanges">Exchanges</Link>
            </li>

            <li className="navLink">
              <Link to="/news">News</Link>
            </li>

          </ul>

        </div>
      </header>



    </div>
  )
}

export default NavBar;
