import React from 'react';
import Cryptocurrency from './Cryptocurrency.js'

const CryptocurrencyList = (props) => {

  const cryptocurrencies = props.cryptocurrencies.map((cryptocurrency) => {
    return (<li key={cryptocurrency.Id} className='component-item'><Cryptocurrency cryptocurrency={cryptocurrency}/>
  </li>)
})

return(
  <ul className="component-list">
    {cryptocurrencies}
  </ul>
)

}

export default CryptocurrencyList;
