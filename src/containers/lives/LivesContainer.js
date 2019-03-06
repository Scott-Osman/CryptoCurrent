import React, {Component} from 'react';
import  PubNubReact  from  'pubnub-react';

import Live from '../../components/lives/Live.js'

class LiveContainer extends Component {
  constructor(props){
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-e56b227f-970a-43e2-984b-cc975ec731c4',
      subscribeKey: 'sub-c-ed699f16-3bf4-11e9-b221-7a660e69c40f'
    });
    this.pubnub.init(this);
  }

  componentDidMount(){
    setInterval(() => {
      const url = 'https://min-api.cryptocompare.com/data/price?fsym=' + this.props.id + '&tsyms=USD'
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.pubnub.publish({
          channel: 'coin-feed',
          message: {
            eon: {
              'Coin': data.USD.toFixed(2)
            }
          }
        })
      })
    }
    , 5000)
  }

  render() {
    return(
      <div className="top-div">
        <div className="live-container">
          <Live pubNub = {this.pubnub}/>
        </div>
      </div>
    );
  }
}

export default LiveContainer;
