import { Fragment } from "react";

export function HeaderItems(props) {
  return (
    <div className="flex items-center">
      {props.items.map((item, index) => (
        <Fragment key={index}>{props.renderItem(item)}</Fragment>
      ))}
    </div>
  );
}
