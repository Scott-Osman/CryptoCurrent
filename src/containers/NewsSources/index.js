import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import NewsSourcesList from '../../components/NewsSourcesList'

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
        <Link to={"/news"}><p>News</p></Link>
        <NewsSourcesList newsSources = {this.state.news}/>
      </div>
    )
  }


}


export default NewsSourcesContainer;
