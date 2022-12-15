import CityCard from "../../components/CityCard"
import Navbar from "../../components/Navbar";
import cityController from "../../controllers/city";
import styles from "../../styles/Card.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Head from "next/head";



export default function ShowCities({ cities }) {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    return (
        <>
            <Head>
                <title>Cities-ITG</title>
            </Head>
            <h3 className={styles.headText}>List Of Cities</h3>
            <br />
            <div className={styles.image}>
                {loading && <div>Loading...</div>}
                {session && (
                    <Image
                        src={session.user.image}
                        alt="userImage"
                        width={50}
                        height={50}
                        className={styles.image}
                    />
                )}
                {!session && (
                    <>

                    </>
                )}
            </div>
            <div className={styles.grid}>
                {cities.map(city => <CityCard key={city.id} city={city}> </CityCard>)}
            </div>
            <br />
            <br />
            <br />
            <br />

            <Navbar></Navbar>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const cities = await cityController.all()
    return {

        props: { cities }
    }
}