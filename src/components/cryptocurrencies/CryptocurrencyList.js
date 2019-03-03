import React from 'react';
import Cryptocurrency from './Cryptocurrency.js'

const CryptocurrencyList = (props) => {

  const cryptocurrencies = props.cryptocurrencies.map((cryptocurrency) => {
    return(<tr key={cryptocurrency.Id} className='component-item'>
      <Cryptocurrency cryptocurrency={cryptocurrency}/></tr>)
  });

  return(
    <tr className="cryptocurrency-component-list">
      {cryptocurrencies}
  </tr>
  )

}

export default CryptocurrencyList;
