import React from 'react';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
const NavBar = (props) => (
=======
const NavBar = (props) => {
  return (
>>>>>>> a6cf9fa6da274e37c48f02905f670cce4f4cbb59

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

<<<<<<< HEAD
=======
            <li className="navLink">
              <Link to="/test">Test</Link>
            </li>

>>>>>>> a6cf9fa6da274e37c48f02905f670cce4f4cbb59
          </ul>

        </div>
      </header>

<<<<<<< HEAD
    </div>
  )

=======


    </div>
  )
}
>>>>>>> a6cf9fa6da274e37c48f02905f670cce4f4cbb59

export default NavBar;
