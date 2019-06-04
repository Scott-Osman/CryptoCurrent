import React from 'react';
import NewsSource from './NewsSources.js'

const NewsSourcesList = (props) => {

  const newsSources = props.newsSources.map((news) => {
    return(<li key={news.key} className='component-item'>
      <NewsSource news={news}/></li>)
    });

    return(
      newsSources
    )

  }

  export default NewsSourcesList;
