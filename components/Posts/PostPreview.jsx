import { ReadMore } from "components/Icons";
import { Link, Image } from "components";

export function PostPreview(props) {
  return (
    <article className="post">
      <header>
        <h3 className="font-medium text-lg md:text-2xl">
          <Link href={props.slug}>{props.title}</Link>
        </h3>
      </header>
      <div>
        <div className="flex items-center text-gray-600">
          <div className="post__date">
            {new Date(props.date).toLocaleDateString()}
          </div>
          {props.tags && (
            <div className="ml-2">
              {props.tags?.map((tag, ind) => (
                <div className="tag" key={ind}>
                  <Link href={`/tag/${tag.slug}`}>#{tag.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-gray-700 mt-2 mb-3">{props.description}</p>

        <Link href={props.slug}>
          <div className="flex items-center font-medium">
            <div>Devamını oku</div>
            <div className="text-xl">
              <ReadMore />
            </div>
          </div>
        </Link>
      </div>
      <footer></footer>
    </article>
  );
}
