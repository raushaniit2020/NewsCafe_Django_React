import React, { useState } from 'react';
import Newsreactions from './Newsreactions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


function SingleNews({ image, url, description, title }) {

    const [activecolor, setActivecolor] = useState('gray');
    const [activecolor1, setActivecolor1] = useState('gray');
    const handleLike = () => {
        if (activecolor === 'gray') {
            setActivecolor('green')
        }
        if (activecolor === 'green') {
            setActivecolor('gray')
        }

    }


    const handleDisLike = () => {
        if (activecolor1 === 'gray') {
            setActivecolor1('red')
        }
        if (activecolor1 === 'red') {
            setActivecolor1('gray')
        }
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"><a href={url} target="_blank" rel="noreferrer">{title}</a></h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read Full News</a>
                <div className="newsreactions__button">

                    <div className="newsreactions" onClick={handleLike}>
                        <Newsreactions Icon={ThumbUpAltIcon} title='Like' color={activecolor} />
                    </div>
                    <div className="newsreactions" onClick={handleDisLike}>
                        <Newsreactions Icon={ThumbDownAltIcon} title='DisLike' color={activecolor1} />
                    </div>
                    <div className="newsreactions">
                        <Newsreactions Icon={CommentIcon} title='Comment' color='gray' />

                    </div>
                    <div className="newsreactions">
                        <Newsreactions Icon={ShareIcon} title='Share' color='gray' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNews
