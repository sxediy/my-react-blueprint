import React from 'react';
import ArticleNews from '../components/articleNews';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=60d2126818fc401489664a4bd5ade034';
    fetch(url)
      .then(res => res.json())
      .then(el => this.setState({ articles: el.articles }));
  }

  render() {
    return (
      <div>
        <div className='news header'>
          <h1>National Geographic News</h1>
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
