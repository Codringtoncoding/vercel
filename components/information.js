import utilStyles from "../styles/utils.module.css";
import searchTranslations from "../public/text.json";
import styles from "../styles/layout.module.css";

export default function Information() {
  const text = searchTranslations;

  return (
    <section className={utilStyles.headingMd}>
      <div className={styles.container}>
      <img className={cardStyles.headerImage} src="/images/background.png" />

        <p>
          {text.textThree} {text.textFour}
        </p>

        <ol>
          <li>
            {" "}
            <p>{text.textSix}</p>
          </li>
          <li>
            {" "}
            <p>{text.textSeven}</p>
          </li>
          <li>
            {" "}
            <p>{text.textEight}</p>
          </li>
          <li>
            {" "}
            <p>{text.textNine}</p>
          </li>

          <li>
            {" "}
            <p>{text.textFive}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
