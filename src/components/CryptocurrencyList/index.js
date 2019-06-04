import React from 'react';
import Cryptocurrency from '../Cryptocurrency'

const CryptocurrencyList = (props) => {
  const cryptocurrencies = props.cryptocurrencies.map((cryptocurrency) => {
    return(<tbody key={cryptocurrency.Id} className='component-item'>
      <Cryptocurrency cryptocurrency={cryptocurrency}/></tbody>)
  });

  return(
      cryptocurrencies
  )

}

export default CryptocurrencyList;
