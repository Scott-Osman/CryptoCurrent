import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
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
    <div className="top-div">

      <div className="cryptocurrency-container">

        <Table striped bordered hover variant="dark" className="cryptocurrency-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Coin Name</th>
              <th>Total Supply</th>
              <th>Total Mined</th>
            </tr>
          </thead>
          <CryptocurrencyList cryptocurrencies = {this.state.cryptocurrencies}/>
        </Table>

      </div>

    </div>
  )
}


}


export default CryptocurrencyContainer;
