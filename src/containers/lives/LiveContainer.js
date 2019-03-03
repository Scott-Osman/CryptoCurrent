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
      let cryptocurrencies = (Object.entries(response.data));
      console.log(cryptocurrencies);
      cryptocurrencies = cryptocurrencies.map((live) => {
        return [live[0], live[1].USD]
      })
      console.log(cryptocurrencies);
      this.setState({lives: cryptocurrencies});
    })
  }

  render(){
    return(
      <div className="live-component-container">
        <h1>Live</h1>
        <LiveList lives = {this.state.lives}/>
      </div>
    )
  }

}

export default LiveContainer;
