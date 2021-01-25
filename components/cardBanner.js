import cardStyles from "../styles/card.module.css";
import styles from "../styles/layout.module.css";

export default function CardBanner() {
  return (
    <section className={styles.container}>
      <img className={cardStyles.headerImage} src="/images/background.png" />
      <img className={cardStyles.mainImage} src="/images/logo-text.png" />
    </section>
  );
}
