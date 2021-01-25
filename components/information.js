import utilStyles from "../styles/utils.module.css";
import searchTranslations from "../public/text.json";
import styles from "../styles/layout.module.css";

export default function Information() {
  const text = searchTranslations;

  return (
    <section className={utilStyles.headingMd}>
      <div className={styles.container}>
        <ul>
          <li>
            <p>{text.textThree}</p>
          </li>
          <li>
            {" "}
            <p>{text.textFour}</p>
          </li>
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
        </ul>
      </div>
    </section>
  );
}
