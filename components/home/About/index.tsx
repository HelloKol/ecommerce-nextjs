import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import fallbackImg from "../../../public/static/media/image_not_found.jpg";
import { useRef, useState } from "react";

const About: NextPage = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>About us</h1>
      </div>
    </section>
  );
};

export default About;
