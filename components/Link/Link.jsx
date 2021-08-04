import NextLink from "next/link";

export function Link({ href, className, children, ...rest }) {
  return (
    <NextLink href={href} {...rest}>
      <a className={{ ...className }}>{children}</a>
    </NextLink>
  );
}
