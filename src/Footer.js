import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
  return (
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

    </div>
  )
}

export default Footer;
