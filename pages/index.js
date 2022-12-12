import MainNavbar from "../components/MainNavbar";
import italyRome from "../public/images/italyRome.jpg"
import styles from "../styles/Home.module.css"
import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.png"
import Link from "next/link";



export default function Home(props) {
  return (
    <>
      <Head>
        <title>Italian-toure-Guide</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(${italyRome.src})`,
          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Image
          src={logo}
          className={styles.logo}
          height={210}
          width={200}
          alt="icon"
        />
        <div className={styles.homeText}>
          <h4>Welcome to italian tour guid <br /> the place <br /> that you can manage your trip</h4>
        </div>
        <div className={styles.homeBtn}>
          <Link href="/cities" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Lets Start</Link>
        </div>
        <MainNavbar />
      </div>

    </>
  )
}

