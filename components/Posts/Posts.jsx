import { Fragment } from "react";

export function Posts({ items = [], ...props }) {
  return (
    <div>
      {items.length === 0 ? (
        <div>Görüntülenecek herhangi bir veri bulunamadı.</div>
      ) : (
        items.map((item, index) => (
          <Fragment key={index}>{props.renderItem(item)}</Fragment>
        ))
      )}
    </div>
  );
}
