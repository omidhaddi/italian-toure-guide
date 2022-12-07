import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import homeIcon from "./images/homeIcon.png";
import profileIcon from "./images/profileIcon.png";
import list from "./images/list.png";
import map from "./images/map.png";
import Link from "next/link";

export default function Navbar() {
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
            href="/"
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
            href="/"
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
            href="/"
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
  )

