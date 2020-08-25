import React from 'react'

function Post(props) {
    return (
        <article className="post">
            <div className="post__date">
                {props.date}
            </div>
            <div className="post__content">
                <p className="post__category">
                    {props.category}
                </p>
                <div className="post__title">
                    {props.title}
                </div>
                <p className="post__description">
                    {props.description}
                </p>
                <div className="read-more">Devamını oku</div>
            </div>
            <footer>
                <div className="post__cover">
                    <img src={props.cover} alt="" />
                </div>
            </footer>
        </article>
    )
}

export default Post