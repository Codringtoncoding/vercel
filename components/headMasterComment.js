import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import searchTranslations from "../public/text.json";

export default function HeadMasterComment() {
  const text = searchTranslations;

  return (
    <section className={utilStyles.headingMd}>
    <div className={styles.container}>
      <br></br>

        <em>"{text.textOne}"</em>
      
      <br></br>
        {" "}
        <em>"{text.textTwo}"</em>
      
      <br></br>
        <img
          className={utilStyles.rainbow}
          src="/images/rainbow-pic-landscape.jpg"
        />
        <b>{text.name}</b>

      <br></br>
    </div>
  </section>
  );
}
