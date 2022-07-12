import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SingleNews from './SingleNews';


function Search(props) {
    const [articles, setArticles] = useState([]);
    const location = useLocation();
    console.log(location.state.value);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/query/?q=${location.state.value}`)
            .then(resp => resp.json())
            .then((body) => {

                setArticles(body.data_articles)

            })
            .catch(error => console.log(error))
    }, [location.state.value]);

    console.log(articles)

    return articles == null ? <div>

    </div> : (

        <div className='row my-4 mx-2'>
            <div className="row">
            {articles.map((article) => {
                return (

                    <div className="col-md-3" key={article.url}>
                        <SingleNews image={article.urlToImage} url={article.url} description={article.description} title={article.title.toUpperCase()} />
                    </div>

                )
            })}
            </div>

        </div >

    )
}

export default Search
