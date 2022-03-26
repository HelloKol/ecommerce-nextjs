import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";
import { useRef, useState } from "react";

const About: NextPage = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>
            We are a fashion house that offers you the best quality of clothes
          </h1>
          <div className={styles.copy}>
            <p className={styles.bodycopyLeft}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur.
            </p>
            <p className={styles.bodycopyRight}>
              Aliquam nunc eget egestas nunc nisl euismod nunc. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices.
            </p>
          </div>
          <div className={styles.stats}>
            <span>
              <h2>7500</h2>
              <p>Happy Clients</p>
            </span>
            <span>
              <h2>87%</h2>
              <p>5 Star Reviews</p>
            </span>
            <span>
              <h2>430</h2>
              <p>Products</p>
            </span>
          </div>
        </div>
        <div className={styles.featuredImage}>
          <Image
            src="/static/media/about-girl.jpg"
            alt="about us"
            width={500}
            height={560}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
