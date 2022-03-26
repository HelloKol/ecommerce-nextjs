import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";

const LookBook: NextPage = () => {
  return (
    <section className={styles.followSection}>
      <div className={styles.container}>
        <h1>Follow Us On Instagram</h1>
        <h3>@Kkity_official</h3>
        <div className={styles.followImages}>
          <div className={styles.imgOne}>
            <Image
              src={"/static/media/follow/olad.jpg"}
              width={300}
              height={380}
              layout={"responsive"}
            />
          </div>
          <div className={styles.flexImages}>
            <div className={styles.imgTwo}>
              <Image
                src={"/static/media/follow/mendes.jpg"}
                width={300}
                height={440}
                layout={"responsive"}
              />
            </div>
            <div className={styles.imgThree}>
              <Image
                src={"/static/media/follow/haust.jpg"}
                width={300}
                height={440}
                layout={"responsive"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookBook;
