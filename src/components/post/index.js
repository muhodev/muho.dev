import React from 'react'
import { Link } from 'gatsby'

function Post(props) {
    return (
        <article className="post">
            <div className="post__date">
                {props.date}
            </div>
            <div className="post__content">
                <p className="post__category">
                    <Link to={"/category/" + props.category.slug}>
                        {props.category.title}
                    </Link>
                </p>
                <div className="post__title">
                    <Link to={props.slug}>
                        {props.title}
                    </Link>
                </div>
                <p className="post__description">
                    {props.description}
                </p>
                <div className="tags">
                    <div className="tag">
                        <Link to="/">
                            css
                                    </Link>
                    </div>
                    <div className="tag">
                        <Link to="/">
                            react
                                    </Link>
                    </div>
                </div>
            </div>
            <footer>
                <Link to={props.slug}>
                    <div className="post__cover">
                        <img loading="lazy" src={props.cover} alt="" />
                    </div>
                </Link>
            </footer>
        </article>
    )
}

export default Post