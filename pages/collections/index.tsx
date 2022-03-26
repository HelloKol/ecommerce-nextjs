import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const arr = [
  {
    id: 0,
    title: "collection 1",
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    id: 1,
    title: "collection 2",
    image: "https://picsum.photos/id/2/200/300",
  },
  {
    id: 2,
    title: "collection 3",
    image: "https://picsum.photos/id/3/200/300",
  },
  {
    id: 3,
    title: "collection 4",
    image: "https://picsum.photos/id/4/200/300",
  },
  {
    id: 4,
    title: "collection 5",
    image: "https://picsum.photos/id/5/200/300",
  },
  {
    id: 5,
    title: "collection 6",
    image: "https://picsum.photos/id/6/200/300",
  },
];

const Collections: NextPage = () => {
  const [isHovered, setIsHovered] = useState({} as any);

  const handleMouseEnter = (index: any) => {
    setIsHovered((prev: any) => {
      return { ...prev, [index]: true };
    });
  };
  const handleMouseLeave = (index: any) => {
    setIsHovered((prev: any) => {
      return { ...prev, [index]: false };
    });
  };
  const renderCollections = () =>
    arr.map((item, index) => {
      const { id, title, image } = item;
      return (
        <li
          className={`${styles.collectionItems}`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className={styles.collection}>
            <img
              className={`${
                isHovered[index] ? styles.arrowShow : styles.arrowHide
              }`}
              src={image}
              alt=""
            />
            <h1 className={styles.title}>{title}</h1>
          </div>
          <hr />
        </li>
      );
    });

  return (
    <section className={styles.collectionSection}>
      <div className={styles.container}>
        <ul className={styles.collectionList}>{renderCollections()}</ul>
      </div>
    </section>
  );
};

export default Collections;
