import Image from "next/image";
import type { NextPage } from "next";
import { sanityClient, urlFor } from "../../lib/sanity";
import { Breadcrumbs } from "../../components";
import { AllProductsType } from "../../types/types";
import styles from "./styles.module.scss";

type ProductProps = {
  products: AllProductsType[];
};

const Shop: NextPage<ProductProps> = ({ products }) => {
  const renderProducts = () =>
    products &&
    products.slice(0, 10).map((item, index) => {
      const { _id, name, price, image } = item;
      const imgSrc = image != null ? urlFor(image).url() : "";
      return (
        <li className={styles[`products-${index + 1}`]} key={_id}>
          <div className={styles.imgWrapper}>
            <Image
              src={imgSrc}
              alt="products"
              width={500}
              height={700}
              objectFit="cover"
              priority={true}
            />
          </div>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.price}>${price}</p>
        </li>
      );
    });

  return (
    <section className={styles.shopSection}>
      <div className={styles.container}>
        <Breadcrumbs />
        <h1>shop</h1>
        <ul className={styles.productsList}>{renderProducts()}</ul>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const productsQuery = `*[_type == "coats"]{
    _id,
    name,
    gender,
    price,
    image,
}`;
  const products = await sanityClient.fetch(productsQuery);
  if (!products) {
    return {
      notFound: true,
    };
  }
  return { props: { products } };
}

export default Shop;
