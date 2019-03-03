import React from 'react';
import Exchange from './Exchange.js'

const ExchangeList = (props) => {

  const exchanges = props.exchanges.map((exchange) => {
    return(<li key={exchange} className='component-item'>
      <Exchange exchange={exchange}/></li>)
  })

  return(
    <ul className="exchange-component-list">
      {exchanges}
    </ul>
  )

}

export default ExchangeList;
