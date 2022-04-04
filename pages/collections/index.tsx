import { NextPage } from "next";
import Image from "next/image";
import { useSpringCarousel } from "react-spring-carousel";
import { sanityClient, urlFor } from "../../lib/sanity";
import { CollectionsType } from "../../types/types";
import styles from "./styles.module.scss";

type CollectionsProps = {
  collections: CollectionsType[];
};

const Collections: NextPage<CollectionsProps> = ({ collections }) => {
  const renderCollections = () => {
    return (
      collections &&
      collections
        .map((item) => ({
          id: item._id,
          renderItem: (
            <div className={styles.items} key={item._id}>
              <div className={styles.imgWrapper}>
                <Image
                  src={item.image != null ? urlFor(item.image).url() : ""}
                  alt={item.name}
                  width={800}
                  height={500}
                  objectFit="cover"
                  quality={100}
                  className={styles.img}
                />
                <h1 className={styles.title}>{item.name}</h1>
              </div>
            </div>
          ),
        }))
        .reverse()
    );
  };

  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    carouselSlideAxis: "y",
    items: renderCollections(),
  });

  return (
    <section className={styles.collectionSection}>
      <div className={styles.container}>{carouselFragment}</div>
    </section>
  );
};

export async function getStaticProps() {
  const collectionsQuery = `*[_type == "collection"]{
    _id,
    name,
    gender,
    image,
}`;
  const collections = await sanityClient.fetch(collectionsQuery);
  return {
    props: {
      collections,
    },
  };
}

export default Collections;
