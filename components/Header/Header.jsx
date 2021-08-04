import { Logo, HeaderItem, HeaderItems } from "components";
import headerItems from "data/headerItems.json";

export function Header(props) {
  return (
    <header>
      <div>
        <Logo />
        {
          <HeaderItems
            items={headerItems}
            renderItem={(item) => <HeaderItem {...item} />}
          />
        }
      </div>
    </header>
  );
}
