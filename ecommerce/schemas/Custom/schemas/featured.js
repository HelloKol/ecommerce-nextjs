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
      name: "imageOne",
      title: "Image One",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageTwo",
      title: "Image Two",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
