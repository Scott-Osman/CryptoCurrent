import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className="top-div">
        <div className="main-container">

          <h1>Welcome</h1>

          <Link to={"/cryptocurrencies"}>
          <p>View Cryptocurrencies</p>
        </Link>

        <Link to={"/exchanges"}>
        <p>View Exchanges</p>
      </Link>

    </div>
  </div>
)
}

}

export default MainContainer;
