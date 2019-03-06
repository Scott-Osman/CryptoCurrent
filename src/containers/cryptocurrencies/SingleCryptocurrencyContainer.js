import React, {Component} from 'react';
import axios from 'axios';

import SingleCryptocurrency from '../../components/cryptocurrencies/SingleCryptocurrency.js'

class SingleCryptocurrencyContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      cryptocurrency: null
    }
  }

  componentDidMount(){
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + this.props.id + '&tsyms=USD'
    axios.get(url)
    .then((response) => {
      console.log(response)
      const cryptocurrency = response.data.DISPLAY;
      console.log(cryptocurrency);
      this.extractCryptocurrencyData(cryptocurrency);
    })
  }

  extractCryptocurrencyData(cryptocurrency){
    const type = this.props.id;
    console.log(cryptocurrency[type].USD);
    this.setState({cryptocurrency: cryptocurrency[type].USD})
  }

  render(){
    return(
      <div className="top-div">
        <SingleCryptocurrency cryptocurrency = {this.state.cryptocurrency} id={this.props.id}/>
      </div>
    )
  }


}


export default SingleCryptocurrencyContainer;
