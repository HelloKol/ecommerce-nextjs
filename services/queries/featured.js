const featuredQuery = `*[_type == "featured"]{
    _id,
    name,
    image,
    description,
  }`;

export default featuredQuery;
