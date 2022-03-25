export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured name",
      type: "string",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
    },
    {
      name: "description",
      title: "Featured description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
