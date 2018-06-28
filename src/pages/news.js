import React from 'react';
import axios from 'axios';
import ArticleNews from '../components/articleNews';


class News extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=60d2126818fc401489664a4bd5ade034';
    axios(url)
      .then(({ data }) => this.setState({ articles: data.articles }));
  }

  render() {
    return (
      <div>
        <div className='news header'>
          <h2>National Geographic News</h2>
        </div>
        { this.state.articles.map((article, index) =>
          <ArticleNews key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            author={article.author}
            urlToImage={article.urlToImage}
          />
        )}
      </div>
    );
  }
}

export default News;
