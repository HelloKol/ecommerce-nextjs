import type { NextPage } from "next";
import Image from "next/image";
import { AllProductsType } from "../../types/types";
import { sanityClient, urlFor } from "../../lib/sanity";
import styles from "./styles.module.scss";

type ProductProps = {
  product: AllProductsType;
};

const Product: NextPage<ProductProps> = ({ product }) => {
  const { _id, name, slug, price, stock, image, description } = product;
  const imgSrc = image != null ? urlFor(image).url() : "";
  console.log(product);
  return (
    <main>
      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.productImage}>
            <Image
              src={imgSrc}
              alt={name}
              width={300}
              height={300}
              quality={100}
              objectFit="contain"
              layout="responsive"
              priority
            />
          </div>
          <div className={styles.productInfo}>
            <p>Status: In Stock</p>
            <h1 className={styles.title}>{name}</h1>
            {/* <p>{description}</p> */}
            <h2 className={styles.price}>{price}</h2>
          </div>
        </div>
      </section>
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
