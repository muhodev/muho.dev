export default {
  name: "post",
  title: "Post",
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
      name: "mainImage",
      title: "Kapak Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Kategori",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "tags",
      title: "Tagler",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "publishedAt",
      title: "Yayınlanma Tarihi",
      type: "datetime",
    },
    {
      name: "body",
      title: "İçerik",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
