import { Link } from "components";

export function Footer(props) {
  return (
    <footer>
      <div className="flex items-center justify-between container flex-col  md:flex-row">
        <div>
          © {new Date().getFullYear()} Built with
          {` `}
          <Link href="https://nextjs.org/" target="_new">
            Next.js
          </Link>
        </div>
        <div>
          <Link href="https://github.com/muhodev" target="_new">
            Github
          </Link>
          <span> • </span>
          <Link href="https://twitter.com/muhodev" target="_new">
            Twitter
          </Link>
          <span> • </span>
          <Link href="https://instagram.com/muhodev" target="_new">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
