import React  from 'react';

const Historical = (props) => {
  if(!props.historical){
    return null;
  }

  return (
    <div className="historical-component">
      <p>Time: {props.historical.time}</p>
      <p>Close: {props.historical.close}</p>
    </div>
  )
}

export default Historical;
