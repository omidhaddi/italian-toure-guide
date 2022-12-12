import styles from '../../../styles/Card.module.css'
import Navbar from "../../../components/Navbar"
import Image from 'next/image'
import Head from 'next/head';
import placeController from '../../../controllers/place'
import Map from '../../../components/Map'
import userController from '../../../controllers/user'
import cityController from '../../../controllers/city'


export default function ShowCity({ place, places, user, city }) {

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
            <form className={styles.btn} action='/api/routes' method="POST">
                <input hidden={true} type="number" id="UserId" name="UserId" value={user.id} />
                <input hidden={true} type="number" id="PlaceId" name="PlaceId" value={place.id} />
                <select class="form-select" aria-label="Default select example" name="price">
                    <option selected>Select Transport</option>
                    <option value={city.busPrice}>Bus</option>
                    <option value={city.metroPrice}>Metro</option>
                </select>
                <br />
                <input className="btn btn-primary btn-lg" type="submit" value="Add To List" />
            </form>
            <br />
            
            <br />
            <br />
            <br />
            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const id = req.query.id
    const place = await placeController.find(id)
    const places = await placeController.all()
    const user = await userController.find(id)
    const city = await cityController.find(id)


    return {

        props: { place, places, user, city },
    }
}