import Navbar from '../../components/Navbar'
import userController from '../../controllers/user'
import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'
import Map from '../../components/MapList'
import placeController from '../../controllers/place'



export default function ShowCity({ routes, places }) {

    const { data: session, status } = useSession();
    const loading = status === "loading";

    let totalPrice = routes.reduce(function (prev, cur) {
        return prev + cur.price;
    }, 0);
    let totalPriceWithPerson = totalPrice * 1

    return (

        <>
            <h3 className={styles.headText}>My Trip List</h3>
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
            <ul className={styles.infoText}>

                {routes.map(route => <li key={route.id}>{route.Place.name} <br /> Transportation Cost: {route.price} € </li>)}

            </ul>

            <div>
                <h5 className={styles.headText2}>Estimated Cost : <strong style={{ color: "red" }}>{totalPriceWithPerson} € </strong></h5>
            </div>

            <div className={styles.map}>
                <Map places={places} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Navbar></Navbar>
        </>
    )

}

export async function getServerSideProps(req, res) {
    const places = await placeController.all()
    const session = await getSession(req)
    let currentUser = null
    if (session) {
        currentUser = await userController.findEmail(session.user.email)
    }
    if (currentUser) {
        const routes = currentUser.Routes
        return {
            props: { currentUser, routes, places },
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