import React from 'react';
import SingleCryptocurrencyHistorical from '../SingleCryptocurrencyHistorical'

const SingleCryptocurrencyHistoricalList = (props) => {

  const historicals = props.historicals.map((historical) => {
    return(<li key={historical.time} className='component-item'>
      <SingleCryptocurrencyHistorical historical={historical}/></li>)
  });

  return(
    <ul>
      {historicals}
    </ul>
  )

}

export default SingleCryptocurrencyHistoricalList;
