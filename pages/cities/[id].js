import styles from '../../styles/Card.module.css'
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import Head from 'next/head';
import cityController from '../../controllers/city';
import PlaceCard from '../../components/PlaceCard'
// import placeController from '../../controllers/place';



export default function ShowCity({ city, places }) {

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


            <div className={styles.grid}>
                {places.map(place => <PlaceCard key={place.id} place={place}></PlaceCard>)}
            </div>

            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    console.log(res);
    const id = req.query.id
    const city = await cityController.findWithPlaces(id)
    const places = city.Places
    console.log(places);
    return {

        props: { city, places },
    }
}
