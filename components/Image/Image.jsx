import NextImage from "next/image";

export function Image({ src, alt, ...rest }) {
  return <NextImage src={src} alt={alt} {...rest} />;
}
