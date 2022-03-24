import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useSpring, useTransition, animated, config } from "react-spring";
import { sanityClient, urlFor } from "../lib/sanity";
import { Arrivals } from "../components";
import { FeaturedType, JacketsType } from "../types/types";
import { featuredQuery, jacketsQuery } from "../services";

import styles from "./styles.module.scss";
import Link from "next/link";

interface featuredInterface {
  featured: FeaturedType[];
}

interface jacketsInterface {
  jackets: JacketsType[];
}
type Props = featuredInterface & jacketsInterface;

const collectionTitle = ["Summer 2022", "new collection"];

const Home: NextPage<Props> = (props) => {
  const { featured, jackets } = props;

  const imgRef = useRef(null);
  const ctaRef = useRef(null);

  const imgFade = useSpring({
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    config: config.molasses,
  });

  const trail = useTransition(collectionTitle, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 50 },
    delay: 400,
    trail: 200,
  });

  const ctaFade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 700,
  });

  const renderHero = () =>
    featured.map((item) => {
      const { _id, name, imageOne, imageTwo } = item;
      const fallBack = "https://bit.ly/3i1Ga5W";
      const imgSrcOne = imageOne != null ? urlFor(imageOne).url() : fallBack;
      const imgSrcTwo = imageTwo != null ? urlFor(imageTwo).url() : fallBack;

      return (
        <div key={_id} className={styles.heroContainer}>
          <animated.div
            className={styles.imageOne}
            style={imgFade}
            ref={imgRef}
          >
            <Image
              src={imgSrcOne}
              alt={name}
              width={500}
              height={600}
              quality={100}
              objectFit="cover"
            />
          </animated.div>
          <div className={styles.nameContainer}>
            {trail((trailStyles, item) => (
              <animated.h1 style={trailStyles} className={styles.name}>
                {item}
              </animated.h1>
            ))}
          </div>
          <animated.span style={ctaFade} ref={ctaRef}>
            <Link href="/">
              <a className={styles.discoverNow}>Discover now</a>
            </Link>
          </animated.span>
          <animated.div
            className={styles.imageTwo}
            style={imgFade}
            ref={imgRef}
          >
            <Image
              src={imgSrcTwo}
              alt={name}
              priority={true}
              unoptimized={true}
              layout="fill"
              objectFit="cover"
            />
          </animated.div>
        </div>
      );
    });

  return (
    <section className={styles.landingSection}>
      <div className={styles.container}>
        <div className={styles.renderHero}>{renderHero()}</div>
        <div className={styles.allSections}>
          <Arrivals jackets={jackets} />
        </div>
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
