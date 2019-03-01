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
    axios.get('https://min-api.cryptocompare.com/data/all/coinlist').then(res => {
      console.log(res.data.Data);
      this.setState({cryptocurrencies: res.data.Data})
    })
  }

  render(){
    return(
      <CryptocurrencyList cryptocurrencies = {this.state.cryptocurrencies}/>
    )
  }


}


export default CryptocurrencyContainer;
