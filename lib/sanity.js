import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "x3bp2qby",
  dataset: "production",
  apiVersion: "2021-06-04",
  useCdn: true,
});
