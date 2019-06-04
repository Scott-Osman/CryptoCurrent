import React from 'react';
import New from './News.js'

const NewsList = (props) => {

  const news = props.news.map((item) => {
    return(<li key={item.id} className='component-item'>
      <New item={item}/></li>)
    });

    return(
      news
    )

  }

  export default NewsList;
