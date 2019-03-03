import React from 'react';
import Live from './Live.js'

const LiveList = (props) => {

  const lives = props.lives.map((live) => {
    return ((<span key={live[0]} className='component-item'><Live live = {live}/></span>))
  })

  return(
    <div className="live-component-list">
      {lives}
    </div>
  )

}

export default LiveList;
