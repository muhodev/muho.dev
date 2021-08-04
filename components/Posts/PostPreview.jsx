import { ReadMore } from "components/Icons";

export function PostPreview(props) {
  return (
    <article className="post">
      <div className="post__content">
        <p className="post__category">
          <Link href={`/category/${props.category.slug}`}>
            {props.category.title}
          </Link>
        </p>
        <div className="post__title">
          <Link href={props.slug}>{props.title}</Link>
        </div>
        <p className="post__description">{props.description}</p>
        <div className="post__meta">
          {props.tags && (
            <div className="tags">
              {props.tags.map((tag, ind) => (
                <div className="tag" key={ind}>
                  <Link href={`/tag/${tag.slug}`}>{tag.title}</Link>
                </div>
              ))}
            </div>
          )}
          <div className="post__date">
            {new Date(props.date).toLocaleDateString()}
          </div>
        </div>
        <Link href={props.slug}>
          <div className="read-more">
            <div>Devamını oku</div>
            <div className="icon">
              <ReadMore />
            </div>
          </div>
        </Link>
      </div>
      <footer>
        <Link href={props.slug}>
          <div className="post__cover">
            <Image src={props.cover} alt="" />
          </div>
        </Link>
      </footer>
    </article>
  );
}
