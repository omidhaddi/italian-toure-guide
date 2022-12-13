import styles from '../../styles/Card.module.css'
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import Head from 'next/head';
import cityController from '../../controllers/city';
import PlaceCard from '../../components/PlaceCard'
import { useSession } from 'next-auth/react';


export default function ShowCity({ city, places }) {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (
        <>
            <Head>
                <title>city-details-ITG</title>
            </Head>
            <h3 className={styles.nameText}>{city.name}</h3>
            <div className={styles.cardCity}>
                <Image src={city.imageUrl} alt="city" width={350} height={200} />
            </div>
            <p className={styles.cityText}>{city.description}</p>
            <br/>
            <h5>Select Your Place</h5>
            <div className={styles.grid}>
                {places.map(place => <PlaceCard key={place.id} place={place}></PlaceCard>)}
            </div>
            <div className={styles.image2}>
                {loading && <div>Loading...</div>}
                {session && (
                    <Image
                        src={session.user.image}
                        alt="userImage"
                        width={50}
                        height={50}
                        className={styles.image2}
                    />
                )}
                {!session && (
                    <>

                    </>
                )}
            </div>
            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const id = req.query.id
    const city = await cityController.findWithPlaces(id)
    const places = city.Places
    console.log(places);
    return {

        props: { city, places },
    }
}
