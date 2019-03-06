import React  from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }



  return (
    <tr>
      <td className="cryptocurrency-container-component">{props.cryptocurrency.SortOrder}</td>

      <td className="cryptocurrency-container-component">
        <img alt="" src={`https://www.cryptocompare.com/${props.cryptocurrency.ImageUrl}`} />
      </td>

      <td className="cryptocurrency-container-component"><Link to={"/cryptocurrencies/" + props.cryptocurrency.Name}>{props.cryptocurrency.Name}</Link></td>
      <td className="cryptocurrency-container-component">{props.cryptocurrency.CoinName}</td>
      <td className="cryptocurrency-container-component">{props.cryptocurrency.TotalCoinSupply}</td>
      <td className="cryptocurrency-container-component">{props.cryptocurrency.TotalCoinsMined}</td>
    </tr>
  )

}

export default Cryptocurrency;
