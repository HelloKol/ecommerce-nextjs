import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { sanityClient, urlFor } from "../../lib/sanity";
import styles from "./styles.module.scss";

const dressesQuery = `*[_type == "dresses" && slug.current  == $slug][0] {
    _id,
    name,
    slug,
    price,
    image,
    description,
}`;

const Product = ({ product }) => {
  const { _id, name, slug, price, image, description } = product;
  console.log(product);
  return <main>asdasd</main>;
};

export async function getStaticPaths() {
  const paths =
    await sanityClient.fetch(`*[_type == "dresses" && defined(slug.current)]{
        "params": {
            "slug": slug.current
        }
    }`);

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const product = await sanityClient.fetch(dressesQuery, { slug });

  return {
    props: {
      product,
    },
  };
}

export default Product;
