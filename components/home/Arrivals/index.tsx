import type { NextPage } from "next";
import Image from "next/image";
import { JacketsType } from "../../../types/types";
import { sanityClient, urlFor } from "../../../lib/sanity";
import styles from "./styles.module.scss";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";
import { useRef, useState } from "react";

interface JacketsProp {
  jackets: JacketsType[];
}

const Arrivals: NextPage<JacketsProp> = ({ jackets }) => {
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

  const productListRef = useRef<HTMLDivElement>(null);

  const slide = (shift: number) => {
    if (productListRef.current) {
      let productsPos = productListRef.current.scrollLeft
      productsPos += shift;
      setscrollX(scrollX + shift);
      productListRef.current.scroll({left:productsPos, behavior: "smooth" });

      if (
        Math.floor(
          productListRef.current.scrollWidth - productListRef.current.scrollLeft
        ) <= productListRef.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    }
  };

  const renderProducts = () => {
    const products = jackets.map((item) => {
      const { _id, name, image } = item;
      const imgSrc = image != null ? urlFor(image).url() : fallbackImg;
      return (
        <div key={_id} className={styles.productItem}>
          <div className={styles.imagWrapper}>
            <Image
              src={imgSrc}
              alt={name}
              width={280}
              height={400}
              objectFit={"cover"}
            />
          </div>
          <p>{name.slice(0, 23)}</p>
        </div>
      );
    });
    return (
      <div ref={productListRef} className={styles.productsList}>
        {products}
      </div>
    );
  };

  return (
    <section className={styles.arrivalsSection}>
      <div className={styles.container}>
        <button onClick={() => slide(-500)}>prev</button>
        <button onClick={() => slide(500)}>next</button>
        {renderProducts()}
      </div>
    </section>
  );
};

export default Arrivals;
