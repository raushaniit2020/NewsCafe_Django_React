import React from 'react'
import SingleNews from './SingleNews';

function NewsItem({ articles }) {
    var article = articles.data_articles;
    return article == null ? <div>

    </div> : (
        <div className="row my-4 mx-2">
            <div className="row">
                {article?.map((element) => {
                    return (
                        <div className="col-md-3" key={element.url}>
                            <SingleNews image={element.urlToImage} url={element.url} description={element.description} title={element.title.toUpperCase()} />
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default NewsItem
