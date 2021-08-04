import { Link } from "components";

export function HeaderItem(props) {
  return (
    <div>
      <Link href={props.href}>{props.title}</Link>
    </div>
  );
}
