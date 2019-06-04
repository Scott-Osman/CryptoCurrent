import React  from 'react';
import {Link} from 'react-router-dom';

const SingleCryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }

  return (
    <div>
      <Link to={"/cryptocurrencies/" + props.id + "/historical"}><p>Historical Price Data</p></Link>
      <Link to={"/cryptocurrencies/" + props.id + "/live"}><p>Live Price Data</p></Link>
      <p>Symbol: {props.cryptocurrency.FROMSYMBOL}</p>
      <p>Ticker: {props.id}</p>
      <p>Price: {props.cryptocurrency.PRICE}</p>
      <p>Day Volume: {props.cryptocurrency.VOLUMEDAY}</p>
      <p>Day High: {props.cryptocurrency.HIGHDAY}</p>
      <p>Day Low: {props.cryptocurrency.LOWDAY}</p>
      <p>Day Change: {props.cryptocurrency.CHANGEDAY}</p>
      <p>Hour High: {props.cryptocurrency.HIGHHOUR}</p>
      <p>Hour Low: {props.cryptocurrency.LOWHOUR}</p>
      <p>Supply: {props.cryptocurrency.SUPPLY}</p>
      <p>Market Cap: {props.cryptocurrency.MKTCAP}</p>
    </div>
  )

}

export default SingleCryptocurrency;
