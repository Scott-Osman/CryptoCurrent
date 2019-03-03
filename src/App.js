import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import LiveContainer from './containers/lives/LiveContainer.js'
import CryptocurrencyContainer from './containers/cryptocurrencies/CryptocurrencyContainer.js'
import ExchangeContainer from './containers/exchanges/ExchangeContainer.js'

class App extends Component {

  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>

            <Route exact path = '/live' component = {LiveContainer}/>

            <Route exact path = '/cryptocurrencies' component = {CryptocurrencyContainer}/>

            <Route exact path = '/exchanges' component = {ExchangeContainer}/>

        </Switch>
      </React.Fragment>
    </Router>
    );
  }

}

export default App;
