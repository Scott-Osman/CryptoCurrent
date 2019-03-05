import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import HistoricalContainer from './containers/historicals/HistoricalContainer.js'
import CryptocurrencyContainer from './containers/cryptocurrencies/CryptocurrencyContainer.js'
import ExchangeContainer from './containers/exchanges/ExchangeContainer.js'

import SingleCryptocurrencyContainer from './containers/cryptocurrencies/SingleCryptocurrencyContainer.js'

import TestContainer from './containers/tests/TestContainer.js'

class App extends Component {

  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>

            <Route exact path = '/historical' component = {HistoricalContainer}/>

            <Route exact path = '/cryptocurrencies' component = {CryptocurrencyContainer}/>

            <Route exact path = '/exchanges' component = {ExchangeContainer}/>

            <Route exact path = '/test' component = {TestContainer}/>

            <Route exact path='/cryptocurrencies/:id' render={(props) => {
              const id = props.match.params.id;
              return <SingleCryptocurrencyContainer id={id}/>
            }}/>

          </Switch>
        </React.Fragment>
      </Router>
    );
  }

}

export default App;
