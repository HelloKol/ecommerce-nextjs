import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { urlFor } from "../../../lib/sanity";
import { AllProductsType } from "../../../types/types";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";
import styles from "./styles.module.scss";

type ProductProps = {
  mainHeader: string;
  products: AllProductsType[];
};

const singleRowFeed: NextPage<ProductProps> = ({ products, mainHeader }) => {
  const renderProducts = () => {
    const allProducts = products
      .slice(0, 10)
      .map((item) => {
        const { _id, name, slug, price, stock, image, description } = item;
        const imgSrc = image != null ? urlFor(image).url() : fallbackImg;
        return (
          <Link href={`/product/${item.slug.current}`}>
            <li key={_id} className={styles.productItem}>
              <div className={styles.imagWrapper}>
                <Image
                  src={imgSrc}
                  alt={name}
                  width={300}
                  height={400}
                  objectFit={"cover"}
                  loading="lazy"
                />
              </div>
              <p>{name && name.slice(0, 23)}</p>
              <p>{price && price}</p>
            </li>
          </Link>
        );
      })
      .sort(() => Math.random() - 0.8);
    return <ul className={styles.productsList}>{allProducts}</ul>;
  };

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>{mainHeader}</h1>
        {renderProducts()}
      </div>
    </section>
  );
};

export default singleRowFeed;
