import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useSpring, useTransition, animated, config } from "react-spring";
import { sanityClient, urlFor } from "../lib/sanity";
import { FeaturedType, JacketsType } from "../types/types";
import { featuredQuery, jacketsQuery } from "../services";

import styles from "./styles.module.scss";

interface featuredInterface {
  featured: FeaturedType[];
}

interface jacketsInterface {
  jackets: JacketsType[];
}
type Props = featuredInterface & jacketsInterface;

const collectionTitle = ["Summer 2022", "new collection"];

const Home: NextPage<Props> = (props) => {
  const { featured } = props;

  const renderHero = () => {
    const { name, description, image } = featured[0];
    const fallBack = "https://bit.ly/3i1Ga5W";
    const imgSrc = image != null ? urlFor(image).url() : fallBack;

    return (
      <>
        <h1>{name}</h1>
        <p className={styles.description}>
          {description[0]["children"][0].text}
        </p>
        <div className={styles.shopNow}>
          <div className={styles.circle}>
            <p>Shop now</p>
          </div>
        </div>
        <div className={styles.featuredImg}>
          <Image
            src={imgSrc}
            alt={name}
            width={400}
            height={500}
            quality={100}
            layout="responsive"
            priority
          />
          <p className={styles.checkOut}>
            Check out <br /> this collection
          </p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

        <span>
          <p>Explore</p>
          <img src="" alt="" />
        </span>
      </>
    );
  };

  return (
    <section className={styles.landingSection}>
      <div className={styles.container}>
        <div className={styles.renderHero}>{renderHero()}</div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const featured = await sanityClient.fetch(featuredQuery);
  const jackets = await sanityClient.fetch(jacketsQuery);
  return { props: { featured, jackets } };
}

export default Home;
