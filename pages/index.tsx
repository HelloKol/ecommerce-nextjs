import type { NextPage } from "next";
import Image from "next/image";
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

const Home: NextPage<Props> = (props) => {
  const { featured, jackets } = props;
  const renderHero = () =>
    featured.map((item) => {
      const { _id, name, imageOne, imageTwo } = item;
      const fallBack = "https://bit.ly/3i1Ga5W";
      const imgSrcOne = imageOne != null ? urlFor(imageOne).url() : fallBack;
      const imgSrcTwo = imageTwo != null ? urlFor(imageTwo).url() : fallBack;

      return (
        <div key={_id} className={styles.heroContainer}>
          <div className={styles.imageOne}>
            <Image
              src={imgSrcOne}
              alt={name}
              width={500}
              height={600}
              quality={100}
              objectFit="cover"
            />
          </div>
          <h1 className={styles.name}>
            Summer 2022 <br /> new collection
          </h1>

          <span>
            <Link href="/">
              <a className={styles.discoverNow}>Discover now</a>
            </Link>
          </span>

          <div className={styles.imageTwo}>
            <Image
              src={imgSrcTwo}
              alt={name}
              priority={true}
              unoptimized={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      );
    });
  return (
    <section className={styles.landingSection}>
      <div className={styles.container}>
        {renderHero()}
        <Arrivals jackets={jackets} />
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
