import type { NextPage } from "next";
import Image from "next/image";
import { JacketsType } from "../../../types/types";
import { sanityClient, urlFor } from "../../../lib/sanity";
import styles from "./styles.module.scss";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";

interface JacketsProp {
  jackets: JacketsType[];
}

const Arrivals: NextPage<JacketsProp> = ({ jackets }) => {
  const renderProducts = () =>
    jackets.map((item) => {
      const { _id, name, image } = item;
      const imgSrc = image != null ? urlFor(image).url() : fallbackImg;
      return (
        <div key={_id}>
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
    <section className={styles.arrivalsSection}>
      <div className={styles.container}>{renderProducts()}</div>
    </section>
  );
};

export default Arrivals;