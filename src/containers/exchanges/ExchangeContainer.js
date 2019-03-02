import React, {Component} from 'react';
import ExchangeList from '../../components/exchanges/ExchangeList.js'
import axios from 'axios';

class ExchangeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      exchanges: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/v2/all/exchanges').then((response) => {
      console.log(response.data.Data)
      const exchanges = (Object.values(response.data.Data));
      console.log(exchanges);
      this.setState({exchanges: exchanges})
    })
  }

  render(){
    return(
      <ExchangeList exchanges = {this.state.exchanges}/>
    )
  }


}


export default ExchangeContainer;
