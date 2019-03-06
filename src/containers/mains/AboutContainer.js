import React, {Component} from 'react';

class AboutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className="top-div">

        <div className="about-container">
          <div className="about-container-title">
            <h1>About</h1>
          </div>
          <div className="about-container-details">
            <p>CryptoCurrent is a Cryptocurrency tracking application which utilises the CryptoCompare API.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default AboutContainer;
