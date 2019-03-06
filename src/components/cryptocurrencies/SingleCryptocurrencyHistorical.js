import React  from 'react';

const SingleCryptocurrencyHistorical = (props) => {

  if(!props.historical){
    return null;
  }

  return (
    <div>
      <p>Time: {props.historical.time}</p>
      <p>Close: {props.historical.close}</p>
    </div>
  )

}

export default SingleCryptocurrencyHistorical;
