import React, {Component} from 'react';
import axios from 'axios';

import SingleCryptocurrencyHistoricalList from '../../components/SingleCryptocurrencyHistoricalList'

class SingleCryptocurrencyHistoricalContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      historicals: []
    }
  }

  componentDidMount(){
    const url = 'https://min-api.cryptocompare.com/data/histominute?fsym=' + this.props.id + '&tsym=USD&limit=10'
    axios.get(url)
    .then((response) => {
      console.log(response)
      const historicals = response.data.Data;
      console.log(historicals);
      this.setState({historicals: historicals})
    })
  }

render(){
  return(
    <div className="top-div">
      <h1>Historical Price Data ({this.props.id} per Minute)</h1>
      <SingleCryptocurrencyHistoricalList historicals = {this.state.historicals}/>
    </div>
  )
}

}

export default SingleCryptocurrencyHistoricalContainer;
