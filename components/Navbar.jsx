import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import back from "../public/images/back.png";
import profileIcon from "../public/images/profileIcon.png";
import list from "../public/images/list.png";
import map from "../public/images/map.png";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLink}>
          <Link
            onClick={() => router.back()}
            href=""
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.icon}>
              <Image
                src={back}
                className={styles.image}
                height={30}
                width={30}
                alt="icon"
              />
              Previous Page
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
            <div></div>
          </Link>
        </div>
      </div>
    </>
  );
}
