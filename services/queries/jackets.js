const jacketsQuery = `*[_type == "jackets"]{
    _id,
    name,
    gender,
    color,
    price,
    stock,
    image,
    description,
  }`;

export default jacketsQuery;
