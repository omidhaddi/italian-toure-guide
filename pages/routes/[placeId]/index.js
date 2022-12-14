import styles from '../../../styles/Card.module.css'
import Navbar from "../../../components/Navbar"
import Head from 'next/head';
import placeController from '../../../controllers/place'
import Link from 'next/link';
import Route from '../../../components/Route';


export default function ShowRoute({ places }) {

    return (
        <>
            <Head>
                <title>Routes-details-ITG</title>
            </Head>
            <h3 className={styles.nameText}></h3>
            <div className={styles.map}>
                <Route places={places} />
            </div>
            <div className={styles.btn}>
                <Link href={`/routes/`} class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Add To List</Link>
            </div>
            <br />
            <br />
            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const places = await placeController.all()
    console.log(places);

    return {

        props: { places },
    }
}
