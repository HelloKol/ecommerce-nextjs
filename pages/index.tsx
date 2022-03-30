import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useSpring, useTransition, animated, config } from "react-spring";
import { sanityClient, urlFor } from "../lib/sanity";

import { NewProducts, About, LookBook, FollowUs } from "../components";
import { featuredQuery, dressesQuery, coatsQuery } from "../services";
import { FeaturedType, AllProductsType } from "../types/types";
import styles from "./styles.module.scss";

interface FeaturedInterface {
  featured: FeaturedType[];
}
interface ProductProps {
  dresses: AllProductsType[];
  coats: AllProductsType[];
}
type Props = FeaturedInterface & ProductProps;

const Home: NextPage<Props> = (props) => {
  const { featured, dresses, coats } = props;

  const renderHero = () => {
    const { name, description, image } = featured[0];
    const fallBack = "https://bit.ly/3i1Ga5W";
    const imgSrc = image != null ? urlFor(image).url() : fallBack;

    return (
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.leftHero}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>
              Shop our endless selection of clothing and accessories for you and
              your loved ones! You'll find pretty pastels, bold dresses, trendy
              separates.
              {/* {description[0]["children"][0].text} */}
            </p>
            <div className={styles.shopNow}>
              <div className={styles.circle}>
                <p>Shop now</p>
              </div>
            </div>
          </div>

          <div className={styles.rightHero}>
            <div className={styles.featuredImg}>
              <Image
                src={imgSrc}
                alt={name}
                width={200}
                height={240}
                quality={100}
                layout="responsive"
                priority
              />
              <p className={styles.checkOut}>
                Check out <br /> this collection
              </p>
            </div>
          </div>

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

          <span className={styles.explore}>
            <p>Explore</p>
            <img src={"./static/icons/down-arrow.png"} alt={"down arrow"} />
          </span>
        </div>
      </section>
    );
  };

  return (
    <main className={styles.landingSection}>
      {renderHero()}
      <NewProducts dresses={dresses} />
      <About />
      <LookBook lookBook={coats} />
      <FollowUs />
    </main>
  );
};

export async function getStaticProps() {
  const featured = await sanityClient.fetch(featuredQuery);
  const dresses = await sanityClient.fetch(dressesQuery);
  const coats = await sanityClient.fetch(coatsQuery);
  return { props: { featured, dresses, coats } };
}

export default Home;
