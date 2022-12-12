// import placeController from '../../controllers/place'
import routeController from '../../controllers/route'
import Navbar from '../../components/Navbar'
import userController from '../../controllers/user'
import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'



export default function ShowCity({ routes }) {

    const { data: session, status } = useSession();
    const loading = status === "loading";



    return (

        <>
            <h3>My Trip List</h3>
            <br />
            <ul>

                {routes.map(route => <li key={route.id}>{route.Place.name} <br/> Transportation Cost: {route.price} € </li>)}

            </ul>
            <div>
            {/* {arr.map((num, sum = 0) => sum = sum + num)} */}
            {/* {let result = 0;
arr.forEach(number => result += number;)} */}
            </div>
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
            <Navbar></Navbar>
        </>
    )

}

export async function getServerSideProps(req, res) {

    const routes = await routeController.findWithPlaces();
    console.log('routes', routes);
    const session = await getSession(req)
    let currentUser = null
    if (session) {
        currentUser = await userController.findEmail(session.user.email)

    }
    if (currentUser) {
        return {
            props: { currentUser, routes },
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