export default {
    name: "collection",
    title: "Collection",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Collections name",
        type: "string",
      },
      {
        name: "gender",
        title: "Gender",
        type: "string",
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
  