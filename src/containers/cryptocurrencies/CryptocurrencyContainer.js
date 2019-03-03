import React, {Component} from 'react';
import axios from 'axios';

import CryptocurrencyList from '../../components/cryptocurrencies/CryptocurrencyList.js'

class CryptocurrencyContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      cryptocurrencies: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/all/coinlist').then((response) => {
      console.log(response)
      const cryptocurrencies = (Object.values(response.data.Data).sort((a, b) =>
        parseFloat(a.SortOrder) - parseFloat(b.SortOrder)
      ));
      console.log(cryptocurrencies);
      this.setState({cryptocurrencies: cryptocurrencies})
    })
  }

  render(){
    return(
      <div className="cryptocurrency-container">
        <h1>Position: </h1>
        <h1>Ticker: </h1>
        <h1>Name: </h1>
        <CryptocurrencyList cryptocurrencies = {this.state.cryptocurrencies}/>
      </div>
    )
  }


}


export default CryptocurrencyContainer;
