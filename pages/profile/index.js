import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'



export default function NewPlace({ }) {

    return (
        <>
            <Head>
                <title>Add-new-place-ITG</title>
            </Head>
            <h1 className={styles.headText}>My Profile</h1>

            <div className={styles.homeBtn}>
                <Link href="/places/new" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Add New Place</Link>
            </div>

            <Navbar></Navbar>
        </>
    )
}
