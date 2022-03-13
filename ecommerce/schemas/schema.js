// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// My schemas
import { jackets, dresses, hoodies, coats, trousers, featured } from "./Custom";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    jackets,
    dresses,
    hoodies,
    coats,
    trousers,
    featured,
  ]),
});
