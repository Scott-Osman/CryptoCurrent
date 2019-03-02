import React, {Component} from 'react';
import CryptocurrencyList from '../../components/cryptocurrencies/CryptocurrencyList.js'
import axios from 'axios';

class CryptocurrencyContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      cryptocurrencies: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/all/coinlist').then((response) => {
      console.log(response.data.Data)
      const cryptocurrencies = (Object.values(response.data.Data));
      console.log(cryptocurrencies);
      this.setState({cryptocurrencies: cryptocurrencies})
    })
  }

  render(){
    return(
      <CryptocurrencyList cryptocurrencies = {this.state.cryptocurrencies}/>
    )
  }


}


export default CryptocurrencyContainer;
