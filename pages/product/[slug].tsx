import type { NextPage } from "next";
import Image from "next/image";
import { AllProductsType } from "../../types/types";
import { sanityClient, urlFor } from "../../lib/sanity";
import styles from "./styles.module.scss";

type ProductProps = {
  product: AllProductsType;
};

const Product: NextPage<ProductProps> = ({ product }) => {
  const { _id, name, slug, price, image, description } = product;
  const imgSrc = image != null ? urlFor(image).url() : "";
  return (
    <main>
      <h1>{name}</h1>
    </main>
  );
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

type pathParams = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: pathParams) {
  const { slug } = params;
  const dressesQuery = `*[_type == "dresses" && slug.current  == $slug][0] {
    _id,
    name,
    slug,
    price,
    image,
    description,
}`;
  const product = await sanityClient.fetch(dressesQuery, { slug });
  return {
    props: {
      product,
    },
  };
}

export default Product;
