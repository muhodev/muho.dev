import { Fragment } from "react";

export function HeaderItems(props) {
  return (
    <div className="header__items">
      {props.items.map((item, index) => (
        <Fragment key={index}>{props.renderItem(item)}</Fragment>
      ))}
    </div>
  );
}
