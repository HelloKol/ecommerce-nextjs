import React from "react";
import { useTransition, animated } from "react-spring";
import styles from "./styles.module.scss";

const TestList = () => {
  const arr = ["one", "two", "three"];
  const transitions = useTransition(arr, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0 },
    trail: 200,
  });
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {transitions((style, item) => (
        <animated.div style={style} className={styles.listItem}>
          {item}
        </animated.div>
      ))}
    </main>
  );
};
export default TestList;
