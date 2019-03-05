import React  from 'react';

const SingleCryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }

  return (
    <div>
      <p>Symbol: {props.cryptocurrency.FROMSYMBOL}</p>
      <p>Name: {props.id}</p>
      <p>Price: {props.cryptocurrency.PRICE}</p>
      <p>Day Volume: {props.cryptocurrency.DAILYVOLUME}</p>
      <p>Day High: {props.cryptocurrency.HIGHDAY}</p>
      <p>Day Low: {props.cryptocurrency.LOWDAY}</p>
      <p>Day Change: {props.cryptocurrency.CHANGEDAY}</p>
      <p>Hour High: {props.cryptocurrency.HIGHHOUR}</p>
      <p>Hour Low: {props.cryptocurrency.HIGHLOW}</p>
      <p>Supply: {props.cryptocurrency.SUPPLY}</p>
      <p>Market Cap: {props.cryptocurrency.MKTCAP}</p>
    </div>
  )

}

export default SingleCryptocurrency;
