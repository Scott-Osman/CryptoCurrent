import React from 'react';
import Live from './Live.js'

const LiveList = (props) => {

  const lives = props.lives.map((live, index) => {
    return(<li key={index} className='component-item'><Live live = {live}/></li>)
  })

  return(
    <ul className="component-list">
      {lives}
    </ul>
  )

}

export default LiveList;
