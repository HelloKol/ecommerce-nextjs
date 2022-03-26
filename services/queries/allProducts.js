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

const dressesQuery = `*[_type == "dresses"]{
    _id,
    name,
    gender,
    color,
    price,
    stock,
    image,
    description,
  }`;

export { jacketsQuery, dressesQuery };
