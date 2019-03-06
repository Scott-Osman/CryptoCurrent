import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar.js'

import MainContainer from './containers/mains/MainContainer.js'
import AboutContainer from './containers/mains/AboutContainer.js'

import CryptocurrencyContainer from './containers/cryptocurrencies/CryptocurrencyContainer.js'
import SingleCryptocurrencyContainer from './containers/cryptocurrencies/SingleCryptocurrencyContainer.js'
import SingleCryptocurrencyHistoricalContainer from './containers/cryptocurrencies/SingleCryptocurrencyHistoricalContainer.js'

import ExchangeContainer from './containers/exchanges/ExchangeContainer.js'

import NewsContainer from './containers/news/NewsContainer.js'
import NewsSourcesContainer from './containers/news/NewsSourcesContainer.js'

import TestContainer from './containers/tests/TestContainer.js'

import Footer from './Footer.js'

class App extends Component {

  render() {
    return (
      <Router >
        <React.Fragment>

          <NavBar />

          <Switch>

            <Route exact path = '/' component = {MainContainer}/>

            <Route exact path = '/about' component = {AboutContainer}/>

            <Route exact path = '/cryptocurrencies' component = {CryptocurrencyContainer}/>

            <Route exact path='/cryptocurrencies/:id' render={(props) => {
              const id = props.match.params.id;
              return <SingleCryptocurrencyContainer id={id}/>
            }}/>

            <Route exact path='/cryptocurrencies/:id/historical' render={(props) => {
              const id = props.match.params.id;
              return <SingleCryptocurrencyHistoricalContainer id={id}/>
            }}/>

            <Route exact path = '/exchanges' component = {ExchangeContainer}/>

            <Route exact path = '/news' component = {NewsContainer}/>

            <Route exact path = '/news/sources' component = {NewsSourcesContainer}/>

            <Route exact path = '/test' component = {TestContainer}/>

          </Switch>

          <Footer />

        </React.Fragment>
      </Router>
    );
  }

}

export default App;
