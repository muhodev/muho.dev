import { Link } from "components";

export function HeaderItem(props) {
  return (
    <div className="ml-1 md:ml-3">
      <Link href={props.href}>{props.title}</Link>
    </div>
  );
}
