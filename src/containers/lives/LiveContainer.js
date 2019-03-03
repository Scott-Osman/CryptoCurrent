import React, {Component} from 'react';
import axios from 'axios';

import LiveList from '../../components/lives/LiveList.js'

class LiveContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      lives: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD').then((response) => {
      console.log(response);
      const cryptocurrencies = (Object.values(response.data));
      console.log(cryptocurrencies);
      this.setState({lives: cryptocurrencies});
    })
  }

  render(){
    return(
      <div>
        <h1>Live:</h1>
        <LiveList lives = {this.state.lives}/>
      </div>
    )
  }

}


export default LiveContainer;
