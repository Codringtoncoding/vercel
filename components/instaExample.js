import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function InstaExample() {
  return (
    <section className={utilStyles.headingXlExample}>
      <div className={styles.container}>
      <img className={cardStyles.headerImage} src="/images/background.png" />
        <p>
          Checkout an{" "}
          <Link href="/pdf">
            <a className={utilStyles.linkColor}>example here!</a>
          </Link>
          <p></p>
          <p className="title">
            The{" "}
            <Link href="https://www.instagram.com/british_bespoke_leavers_books/">
              <a className={utilStyles.linkColor}>Leavers book Instagram</a>
            </Link>
          </p>{" "}
        </p>
      </div>
    </section>
  );
}
