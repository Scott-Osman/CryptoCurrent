import React, {Component} from 'react';
import  PubNubReact  from  'pubnub-react';

import Test from '../../components/tests/Test.js'

class TestContainer extends Component {
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
      fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      .then(res => res.json())
      .then(data => {
        this.pubnub.publish({
          channel: 'bitcoin-feed',
          message: {
            eon: {
              'BitCoin': data.BTC.USD.toFixed(2)
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
          <Test pubNub = {this.pubnub}/>
        </div>
      );
    }
  }

  export default TestContainer;
