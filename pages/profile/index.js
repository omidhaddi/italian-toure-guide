import Navbar from '../../components/Navbar'
import styles from '../../styles/Profile.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { getSession } from 'next-auth/react'
import userController from '../../controllers/user'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import logo from '../../public/images/logo.png'

export default function NewPlace() {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    const handleSignin = (e) => {
        e.preventDefault();
        signIn();
    };

    const handleSignout = (e) => {
        e.preventDefault();
        signOut();
    };

    return (
        <>
            <Head>
                <title>Profile-ITG</title>
            </Head>
            <h1 className={styles.headText}>My Profile</h1>

            <div>
                <ul className={styles.infoText}>
                    <li>Name/Last Name : {session.user.name}</li>
                    <li> Email : {session.user.email}</li>
                </ul>
            </div>
            <div className={styles.image2}>
                <Image src={logo} alt='image' width={230} height={250} className={styles.image2} />
            </div>
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href="/places/new" className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Add New Place</Link>
            </div>
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href='/places/review' className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Share your experience</Link>
            </div>
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href="/routes" className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">My List</Link>
            </div>
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
                {session && (
                    <button
                        href="#"
                        onClick={handleSignout}
                        className="btn btn-primary active"
                    >
                        Sign out
                    </button>
                )}
                {!session && (
                    <button
                        href="#"
                        onClick={handleSignin}
                        className="btn btn-outline-primary"
                    >
                        Sign in
                    </button>
                )}
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

    const session = await getSession(req)
    let currentUser = null
    if (session) {
        currentUser = await userController.findEmail(session.user.email)
    }
    if (currentUser) {
        return {
            props: { currentUser },
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/api/auth/signin?callbackUrl=http%3A%2F%2Fitalian-tour-guide.herokuapp.com`
            }
        }
    }
}

