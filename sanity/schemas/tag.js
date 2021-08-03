export default {
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Açıklama",
      type: "text",
    },
  ],
};
