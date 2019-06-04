import React from 'react';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
const Footer = (props) => (
=======
const Footer = (props) => {
  return (
>>>>>>> a6cf9fa6da274e37c48f02905f670cce4f4cbb59

    <div className="footer">

      <footer className="app-footer">
        <div className="footer-links">

          <ul>

            <li className="footerParagraph">
              <p>
                CodeClan
                Clockwise Office
                Renfrew Street,
                Glasgow
              </p>
            </li>

            <li className="footerLink">
              <Link to="/about">About</Link>
            </li>

            <li className="footerLink">
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </li>

            <li className="footerLink">
              <Link to="/exchanges">Exchanges</Link>
            </li>

            <li className="footerLink">
              <Link to="/news">News</Link>
            </li>

          </ul>

        </div>
      </footer>

<<<<<<< HEAD
    </div>
  )
=======


    </div>
  )
}
>>>>>>> a6cf9fa6da274e37c48f02905f670cce4f4cbb59

export default Footer;
