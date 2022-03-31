import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import styles from "./styles.module.scss";
import imgTest from "../../public/static/media/about-girl.jpg";

const mockedItems = [
  {
    id: "0",
    title: "collection 1",
    image: "https://picsum.photos/id/1/1920/1920",
  },
  {
    id: "1",
    title: "collection 2",
    image: "https://picsum.photos/id/2/1920/1920",
  },
  {
    id: "2",
    title: "collection 3",
    image: "https://picsum.photos/id/3/1920/1920",
  },
  {
    id: "3",
    title: "collection 4",
    image: "https://picsum.photos/id/4/1920/1920",
  },
  {
    id: "4",
    title: "collection 5",
    image: "https://picsum.photos/id/5/1920/1920",
  },
  {
    id: " 5",
    title: "collection 6",
    image: "https://picsum.photos/id/6/1920/1920",
  },
];

const Collections: NextPage = () => {
  // carousel
  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    carouselSlideAxis: "y",
    items: mockedItems.map((item) => ({
      id: item.id,
      renderItem: (
        <div className={styles.items} key={item.id}>
          <div className={styles.imgWrapper}>
            <Image
              src={imgTest}
              alt={item.title}
              width={500}
              height={500}
              objectFit="contain"
              quality={100}
              className={styles.img}
            />
            {/* <h1 className={styles.title}>{item.title}</h1> */}
          </div>
        </div>
      ),
    })),
  });

  return (
    <section className={styles.collectionSection}>
      <div className={styles.container}>
        <div className={styles.collectionList}>{carouselFragment}</div>
      </div>
    </section>
  );
};

export default Collections;
