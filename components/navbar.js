import Navbar from "react-bootstrap/Navbar";
import styles from '../styles/nav.module.css';



export default function Navigation() {

const title = 'Bespoke Yearbooks'
  return (
    <>
      <Navbar className={styles.Navbar} sticky="top" variant="light">
        <img
          alt="British Bespoke Leavers Books"
          src="/images/background.png"
          width="50"
          height="50"
        />{" "}
        {title}
      </Navbar>
    </>
  );
}
