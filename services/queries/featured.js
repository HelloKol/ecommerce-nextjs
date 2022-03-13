const featuredQuery = `*[_type == "featured"]{
    _id,
    name,
    imageOne,
    imageTwo,
    description,
  }`;

export default featuredQuery;
