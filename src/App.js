import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar.js'

import MainContainer from './containers/Main'
import AboutContainer from './containers/About'

import LivesContainer from './containers/Live'

import CryptocurrencyContainer from './containers/Cryptocurrency'
import SingleCryptocurrencyContainer from './containers/SingleCryptocurrency'
import SingleCryptocurrencyHistoricalContainer from './containers/SingleCryptocurrencyHistorical'

import ExchangeContainer from './containers/Exchange'

import NewsContainer from './containers/News'
import NewsSourcesContainer from './containers/NewsSources'

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

            <Route exact path='/cryptocurrencies/:id/live' render={(props) => {
              const id = props.match.params.id;
              return <LivesContainer id={id}/>
            }}/>

            <Route exact path = '/exchanges' component = {ExchangeContainer}/>

            <Route exact path = '/news' component = {NewsContainer}/>

            <Route exact path = '/news/sources' component = {NewsSourcesContainer}/>

          </Switch>

          <Footer />

        </React.Fragment>
      </Router>
    );
  }

}

export default App;
