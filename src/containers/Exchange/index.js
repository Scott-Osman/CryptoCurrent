import React, {Component} from 'react';
import axios from 'axios';

import ExchangeList from '../../components/ExchangeList'

class ExchangeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      exchanges: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/v2/all/exchanges').then((response) => {
      console.log(response);
      const exchanges = (Object.keys(response.data.Data));
      console.log(exchanges);
      this.setState({exchanges: exchanges})
    })
  }

  render(){
    return(
      <div className="top-div">

        <div className="exchange-container">
          <h1>Exchanges</h1>
          <ExchangeList exchanges = {this.state.exchanges}/>
        </div>

      </div>
    )
  }

}

export default ExchangeContainer;
