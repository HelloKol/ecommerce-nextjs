import type { NextPage } from "next";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";

import { ToggleMenu } from "./ToggleMenu";
import { useDimensions } from "./useDimensions";
import styles from "./styles.module.scss";
import { useRef } from "react";

const navigationLinks = [
  { name: "shop", path: "/shop" },
  { name: "men", path: "/" },
  { name: "women", path: "/" },
  { name: "salve", path: "/" },
  { name: "collections", path: "/" },
  { name: "search", path: "/" },
  { name: "cart", path: "/" },
];

const variants = {
  open: {
    // opacity: 1,
    // height: 10,
    display: "block",
  },
  closed: {
    // opacity: 0,
    // height: 0,
    display: "none",
  },
};

const Header: NextPage = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const renderHeader = () => {
    const navLinks = navigationLinks.map((navItem) => {
      const { name, path } = navItem;
      return (
        <motion.li key={name} variants={variants} onClick={() => toggleOpen()}>
          <Link href={path}>
            <a>{name}</a>
          </Link>
        </motion.li>
      );
    });
    return <motion.ul className={styles.navigationList}>{navLinks}</motion.ul>;
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className={styles.desktopHeader}>{renderHeader()}</nav>

      {/* Mobile navigation */}
      <motion.nav
        className={styles.mobileHeader}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className={styles.headerItems}>
          {renderHeader()}
          <motion.div className={styles.background} variants={sidebar} />
          <ToggleMenu toggle={() => toggleOpen()} />
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Header;
