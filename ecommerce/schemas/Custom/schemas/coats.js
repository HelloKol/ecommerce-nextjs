export default {
  name: "coats",
  title: "Coats",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Coats name",
      type: "string",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
    },
    {
      name: "categoryName",
      title: "Category Name",
      type: "string",
    },

    {
      name: "description",
      title: "Coats description",
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
