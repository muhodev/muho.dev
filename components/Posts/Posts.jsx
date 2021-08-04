import { Fragment } from "react";

export function Posts(props) {
  return (
    <div>
      {props.items((item, index) => (
        <Fragment key={index}>{props.renderItem(item)}</Fragment>
      ))}
    </div>
  );
}
