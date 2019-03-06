import React, {Component} from 'react';
import axios from 'axios';

import NewsSourcesList from '../../components/news/NewsSourcesList.js'

class NewsSourcesContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/news/feeds')
    .then((response) => {
      console.log(response)
      const news = response.data;
      console.log(response.data);
      this.setState({news: news})
    })
  }

  render(){
    return(
      <div className="top-div">
        <NewsSourcesList newsSources = {this.state.news}/>
      </div>
    )
  }


}


export default NewsSourcesContainer;
