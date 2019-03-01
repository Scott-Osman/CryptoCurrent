import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import CryptocurrencyContainer from './containers/cryptocurrencies/CryptocurrencyContainer.js'

class App extends Component {

  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path = '/cryptocurrencies' component={CryptocurrencyContainer}/>
        </Switch>
      </React.Fragment>
    </Router>
    );
  }

}

export default App;
