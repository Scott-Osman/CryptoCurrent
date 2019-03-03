import React, {Component} from 'react';
import axios from 'axios';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
    <BootstrapTable className="cryptocurrency-component-container" data={this.state.cryptocurrencies} keyField='position' striped bordered hover>
      <TableHeaderColumn dataField='Position'>Position</TableHeaderColumn>
      <TableHeaderColumn dataField='Ticker'>Ticker</TableHeaderColumn>
      <TableHeaderColumn dataField='Name'>Name</TableHeaderColumn>
      <tbody>
        <CryptocurrencyList cryptocurrencies = {this.state.cryptocurrencies}/>
      </tbody>

    </BootstrapTable>

  )
}


}


export default CryptocurrencyContainer;
