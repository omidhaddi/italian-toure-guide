import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import homeIcon from "../public/images/homeIcon.png";
import profileIcon from "../public/images/profileIcon.png";
import list from "../public/images/list.png";
import map from "../public/images/map.png";
import Link from "next/link";
// import {signIn,signOut} from "next-auth/react"
export default function Navbar() {
  // const session = props.session
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLink}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.icon}>
              <Image
                src={homeIcon}
                className={styles.image}
                height={30}
                width={30}
                alt="icon"
              />
              Home
            </div>
          </Link>

          <Link
            href="/routes/map"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.icon}>
              <Image
                src={map}
                className={styles.image}
                height={30}
                width={30}
                alt="icon"
              />
              Map
            </div>
          </Link>
          <Link
            href="/routes"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.icon}>
              <Image
                src={list}
                className={styles.image}
                height={30}
                width={30}
                alt="icon"
              />
              My list
            </div>
          </Link>
          <Link
            href="/profile"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.icon}>
              <Image
                src={profileIcon}
                className={styles.image}
                height={30}
                width={30}
                alt="icon"
              />
              Account
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
