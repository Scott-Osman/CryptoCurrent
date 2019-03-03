import React from 'react';
import Historical from './Historical.js'

const HistoricalList = (props) => {

  const historicals = props.historicals.map((historical) => {
    return(<li key={historical.time} className='component-item'>
      <Historical historical={historical}/></li>)
  })

  return(
    <ul className="historical-component-list">
      {historicals}
    </ul>
  )

}

export default HistoricalList;
