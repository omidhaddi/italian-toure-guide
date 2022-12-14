import styles from '../../../styles/Card.module.css'
import Navbar from "../../../components/Navbar"
import Image from 'next/image'
import Head from 'next/head';
import placeController from '../../../controllers/place'
import Map from '../../../components/Map'
import userController from '../../../controllers/user'
import cityController from '../../../controllers/city'
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';


export default function ShowCity({ place, places, currentUser, city }) {
    const { data: session, status } = useSession();
    const loading = status === "loading";
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
                <input hidden={true} type="number" id="UserId" name="UserId" value={currentUser.id} />
                <input hidden={true} type="number" id="PlaceId" name="PlaceId" value={place.id} />
                <select class="form-select" aria-label="Default select example" name="price">
                    <option selected>Select Transport</option>
                    <option value={city.busPrice}>Bus</option>
                    <option value={city.metroPrice}>Metro</option>
                </select>
                <br />
                <dev className="d-grid gap-2 col-6 mx-auto">
                    <input className="btn btn-primary btn-lg" type="submit" value="Add To List" />
                </dev>
                <br />
                <dev className="d-grid gap-2 col-6 mx-auto">
                    <Link href={`/routes/${place.id}`} className="btn btn-primary btn-lg" role="button" data-bs-toggle="button" aria-pressed="true">Route</Link>
                </dev>
            </form>
            <div >
            </div>
            <br />
            <br />
            <br />
            <br />
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
    const place = await placeController.find(id)
    const places = await placeController.all()
    const user = await userController.find(id)
    const city = await cityController.find(id)
    const session = await getSession(req)
    let currentUser = null
    if (session) {
        currentUser = await userController.findEmail(session.user.email)
        console.log('this is', currentUser);
    }
    if (currentUser) {
        return {
            props: { currentUser, place, places, user, city },
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000`
            }
        }
    }
}