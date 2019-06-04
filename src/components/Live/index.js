import React, {Component} from 'react';
import  PubNubReact  from  'pubnub-react';
import  Chart  from  'eon-react';

class Live extends Component {
  constructor(props){
    super(props);
    this.pubnub = new PubNubReact({
      subscribeKey: 'sub-c-ed699f16-3bf4-11e9-b221-7a660e69c40f'
    });
    this.pubnub.subscribe({
      channel: ['coin-feed'],
    });
    this.pubnub.init(this);
  }

  render() {
    return(
      <Chart
        channels = {['coin-feed']}
        history = {false}
        flow = {true}
        limit = {15}
        pubnub = {this.pubnub}
        generate = {
          {data : {labels: true, type: 'spline'}},
          {axis : {y: {padding: {top:100, bottom:100}},
          x: {type: 'timeseries',tick: {format: '%H:%M:%S'}}}}
        }
      />
    );
  }
}

export default Live;
