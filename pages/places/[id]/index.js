import styles from '../../../styles/Card.module.css'
import Navbar from "../../../components/Navbar"
import Image from 'next/image'
import Head from 'next/head';
import placeController from '../../../controllers/place';
import Map from '../../../components/Map'
import Link from 'next/link';




export default function ShowCity({ place, places }) {

    return (
        <>
            <Head>
                <title>Place-details-ITG</title>
            </Head>
            <h3 className={styles.nameText}>{place.name}</h3>
            <div className={styles.cardCity}>
                <Image src={place.imageUrl} alt="place" width={350} height={200} />
            </div>
            <p className={styles.cityText}>{place.description}</p>
            <div className={styles.map}>
                <Map places={places} />
            </div>
            <br/>
            <div>
                <Link href="/profile" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Add To List</Link>
            </div>
        
            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const id = req.query.id
    const place = await placeController.find(id)
    const places = await placeController.all()

    return {

        props: { place, places },
    }
}