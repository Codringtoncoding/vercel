import styles from "../styles/layout.module.css";
import Head from "next/head";
import Link from "next/link";
/* compnent level wrapper layout*/

const name = "British made bespoke leavers books";
export const siteTitle = "Bespoke-leavers-books.co.uk";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/images/background.png" />
          <meta name="description" content="Bespoke school leavers books" />
        </Head>

        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
