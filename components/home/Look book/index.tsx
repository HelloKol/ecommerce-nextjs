import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import { sanityClient, urlFor } from "../../../lib/sanity";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";
import { AllProductsType } from "../../../types/types";

interface ProductProps {
  lookBook: AllProductsType[];
}

const LookBook: NextPage<ProductProps> = ({ lookBook }) => {
  const renderProducts = () => {
    const products = lookBook.slice(14, 17).map((item) => {
      const { _id, name, image, price } = item;
      const imgSrc = image != null ? urlFor(image).url() : fallbackImg;
      return (
        <li key={_id} className={styles.productItem}>
          <div className={styles.imagWrapper}>
            <Image
              src={imgSrc}
              alt="products"
              width={300}
              height={400}
              layout="responsive"
            />
          </div>
          <p>{name}</p>
        </li>
      );
    });
    return <ul className={styles.productsList}>{products}</ul>;
  };

  return (
    <section className={styles.lookSection}>
      <div className={styles.container}>
        <h1>Look Books</h1>
        {renderProducts()}
      </div>
    </section>
  );
};

export default LookBook;
