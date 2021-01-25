import cardStyles from "../styles/card.module.css";
import styles from "../styles/layout.module.css";
import React from "react";

export default function Card(props) {
    const imgSrc = props.imgSrc;
  return (
    <section className={styles.container}>
      <img className={cardStyles.mainImage} src={imgSrc} />
    </section>
  );
}
