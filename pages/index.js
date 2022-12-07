import Navbar from "../components/Navbar";
import italyRome from "../components/images/italyRome.jpg"
import Search from "../components/Search"
import styles from "../styles/Home.module.css"
import Head from "next/head";


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
        <div className={styles.homeText}>
          <h4 style={{ textAlign: 'center', }}
          >Welcome to italian tour guid <br /> the place <br /> that you can manage your trip</h4>
        </div>
        <div className={styles.search}>
          <Search></Search>
        </div>

        <Navbar></Navbar>
      </div>
    </>
  )
}
