import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import NewsList from '../../components/news/NewsList.js'

class NewsContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
    .then((response) => {
      console.log(response)
      const news = response.data.Data;
      console.log(response.data.Data);
      this.setState({news: news})
    })
  }

  render(){
    return(
      <div className="top-div">
        <Link to={"/news/sources"}><p>Sources</p></Link>
        <NewsList news = {this.state.news}/>
      </div>
    )
  }


}


export default NewsContainer;
