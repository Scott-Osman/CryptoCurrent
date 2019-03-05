import React, {Component} from 'react';
import  PubNubReact  from  'pubnub-react';
import  Chart  from  'eon-react';

class Test extends Component {
  constructor(props){
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-e56b227f-970a-43e2-984b-cc975ec731c4',
      subscribeKey: 'sub-c-ed699f16-3bf4-11e9-b221-7a660e69c40f'
    });
    this.pubnub.init(this);
  }

  render() {
    return(
      <Chart
        channels = {['bitcoin-feed']}
        history = {true}
        flow = {true}
        limit = {15}
        pubnub = {this.pubnub}
        generate = {
          {data : {labels: true,type: 'line'}},
          {axis : {y: {padding: {top:100, bottom:100}},
          x: {type: 'timeseries',tick: {format: '%H:%M:%S'}}}}
        }
      />
    );
  }
}

export default Test;
