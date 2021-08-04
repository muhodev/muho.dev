import { ReadMore } from "components/Icons";
import { Link, Image } from "components";
import imageUrlFor from "utils/imageUrlFor";

export function PostPreview(props) {
  return (
    <article className="grid md:grid-cols-3 gap-8 py-8 border-b">
      <div className="col-span-2">
        <header>
          <h3 className="font-medium text-lg md:text-2xl mb-3">
            <Link href={`/${props.slug}`}>{props.title}</Link>
          </h3>
        </header>
        <div className="flex items-center">
          {props.tags && (
            <div className="flex mr-2">
              {props.tags?.map((tag, ind) => (
                <div
                  style={{
                    color: tag.color || "currentcolor",
                    backgroundColor: tag.bg || "",
                  }}
                  className="py-0.5 px-1 mr-3 text-sm rounded-md font-medium"
                  key={ind}
                >
                  <Link href={`/tag/${tag.slug}`}>#{tag.title}</Link>
                </div>
              ))}
            </div>
          )}
          <div className="text-gray-600">
            {new Date(props.publishedAt).toLocaleDateString()}
          </div>
        </div>
        <p className="text-gray-700 mt-4 mb-5">{props.description}</p>

        <Link href={`/${props.slug}`}>
          <div className="flex items-center font-medium">
            <div>Devamını oku</div>
            <div className="text-xl">
              <ReadMore />
            </div>
          </div>
        </Link>
      </div>
      <footer className="w-full">
        {props.cover && (
          <Image
            src={imageUrlFor(props.cover).ignoreImageParams().width(500).url()}
            alt=""
            layout="responsive"
            loading="lazy"
            width="250"
            height={250 / props.coverAspect}
          />
        )}
      </footer>
    </article>
  );
}
