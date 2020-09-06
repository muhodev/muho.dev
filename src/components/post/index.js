import React from 'react'
import { Link } from 'gatsby'
import ReadMore from "./read-more"
import Img from "gatsby-image"

function Post(props) {
    return (
        <article className="post">

            <div className="post__content">
                <p className="post__category">
                    <Link to={"/category/" + props.category.Slug}>
                        {props.category.Title}
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
                <div className="post__meta">

                    {
                        props.tags &&

                        <div className="tags">
                            {
                                props.tags.map((tag, ind) => (
                                    <div className="tag" key={ind}>
                                        <Link to={"/tag/" + tag.Slug}>
                                            {tag.Title}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    <div className="post__date">
                        {props.date}
                    </div>
                </div>
                <Link to={props.slug}>
                    <div className="read-more">
                        <div>
                            Devamını oku
                      </div>
                        <div className="icon">
                            <ReadMore />
                        </div>
                    </div>
                </Link>
            </div>
            <footer>
                <Link to={props.slug}>
                    <div className="post__cover">
                        <Img fluid={props.cover.fluid} />
                    </div>
                </Link>
            </footer>
        </article>
    )
}

export default Post