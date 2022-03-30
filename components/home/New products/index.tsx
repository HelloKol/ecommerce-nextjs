import type { NextPage } from "next";
import Image from "next/image";
import { AllProductsType } from "../../../types/types";
import { sanityClient, urlFor } from "../../../lib/sanity";
import styles from "./styles.module.scss";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";
import { useRef, useState } from "react";
import Link from "next/link";

type ProductProps = {
  dresses: AllProductsType[];
};

const NewProducts: NextPage<ProductProps> = ({ dresses }) => {
  const renderProducts = () => {
    const products = dresses
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
    return <ul className={styles.productsList}>{products}</ul>;
  };

  return (
    <section className={styles.arrivalsSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>New Arrivals</h1>
        {renderProducts()}
      </div>
    </section>
  );
};

export default NewProducts;
