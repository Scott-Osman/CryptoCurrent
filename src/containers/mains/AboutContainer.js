import React, {Component} from 'react';
import axios from 'axios';

class AboutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div class="top-div">
        <div class="about_title_container">
          <h1>About</h1>
        </div>
        <div class="details_container">
          <p>CryptoCurrent is a Cryptocurrency tracking application which utilises the CryptoCompare API.</p>
        </div>
      </div>
    )
  }
}

export default AboutContainer;
