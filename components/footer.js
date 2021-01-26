import styles from "../styles/layout.module.css";
import searchTranslations from "../public/text.json";
import utilStyles from "../styles/utils.module.css";

export default function Footer() {
  const text = searchTranslations;

  return (
    <footer>
      <div className={styles.container}>
          <b>
        <a className={utilStyles.linkColor} href="mailto: info@emmacodrington.co.uk">{text.textTen}</a>
        </b>
        <b>{text.textEleven}</b>
      </div>
    </footer>
  );
}
