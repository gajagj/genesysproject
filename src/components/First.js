import React from 'react';
import axios from 'axios';
import { frameAuthorName } from './utils';

export default class Articles extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: ""
        }
    }
    defaultApiCall = (countryCd = "us", categoryCd = "business") => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCd}&category=${categoryCd}&apiKey=cc3874e3e2f2416fa07bc891e13353a1`).then(res => {
            console.log("response", res.data)
            this.setState({ articles: res.data.articles })
        })
    }
    componentDidMount() {
        this.defaultApiCall();
    }

    handleCategoryChange = (e) => {
        let category = e.target.value;
        this.defaultApiCall("US", category)
    }

    displayArticleCards = () => {
        const { articles } = this.state;
        return articles.map((article, index) => {
            if (index > 0) {
                return <div className="card">
                    <div><a href={article.url}><img src={article.urlToImage} alt="author-image" /></a></div>
                    <div className="card-body"><h3><a href={article.url}>{article.title}</a></h3>
                        <div><label>By: </label><span>{frameAuthorName(article.author)}</span></div>
                        <div>{article.description}</div>
                        <div className="footer"><a href={article.url}>More Details</a></div>
                    </div>
                </div>
            }
        })
    }

    displayArticleHeadercard = (article) => {
        return <div className="card header-card">
            <div><a href={article.url}><img src={article.urlToImage} alt="author-image" /></a></div>
            <div className="card-body"><h1><a href={article.url}>{article.title}</a></h1>
                <div><label>By: </label><span>{frameAuthorName(article.author)}</span></div>
                <div>{article.description}</div>
                <div className="footer"><a href={article.url}>More Details</a></div>
            </div>
        </div>
    }

    render() {
        return <div className="first-page">
            <h1 className="page-header">Today Headlines</h1>
            {this.state.articles.length ?
                <div>
                    {this.displayArticleHeadercard(this.state.articles[0])}
                    <div className="article-box">
                        {this.displayArticleCards()}
                    </div>
                </div> : <div className="loader"></div>}
        </div>
    }
}