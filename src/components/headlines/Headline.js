import React from 'react';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a63f62608ebf43d4b855f19cde053677');

export default class Headlines extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

  componentDidMount() {

    const getSources = localStorage.getItem('sources');

    const apiUrl =
    `https://newsapi.org/v2/top-headlines?sources=${getSources}&apiKey=a63f62608ebf43d4b855f19cde053677`;

    alert(apiUrl)

fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then(response => {
      const data = response.articles.map(x => [x.description, ' ']);
    
      this.setState({
        news: data
    });
    
    
    });
  }

  render() {
    return (

      <p>
      {this.state.news}
      </p>
    )
  }
}