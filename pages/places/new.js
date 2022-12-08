import Navbar from '../../components/Navbar'
// import { getSession } from 'next-auth/react'
// import userController from '../../controllers/userController'
import ImageUpload from '../../components/ImageUpload';
import styles from '../../styles/Home.module.css'
import Head from 'next/head';


export default function NewFlat() {

    return (
        <>
            <Head>
                <title>Add-new-place-ITG</title>
            </Head>
            <h1 className={styles.headText}>Add new Place</h1>
            <div className={styles.form}>
                <form action='/api/places' method="POST">
                    <label htmlFor="name" className="form-label">Place Name</label><br />
                    <input className="form-control form-control-sm" type="text" id="name" name="name" />
                    <label htmlFor="description" className="form-label">Description</label>
                    <input className="form-control form-control-sm" type="text" id="description" name="description" />
                    <label htmlFor="address" className="form-label">Address</label>
                    <input className="form-control form-control-sm" type="text" id="address" name="address" />
                    <br />
                    <ImageUpload></ImageUpload>
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </form>
            </div>
            <Navbar></Navbar>
        </>
    )
}