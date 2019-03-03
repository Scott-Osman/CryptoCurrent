import React, {Component} from 'react';
import axios from 'axios';

import HistoricalList from '../../components/historicals/HistoricalList.js'

class HistoricalContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      historicals: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=10').then((response) => {
      console.log(response)
      const historicals = (Object.values(response.data.Data));
      console.log(historicals);
      this.setState({historicals: historicals})
    })
  }

  render(){
    return(
      <div>
        <h1>Historical Price Data (BTC per Minute):</h1>
        <HistoricalList historicals = {this.state.historicals}/>
      </div>
    )
  }

}

export default HistoricalContainer;
