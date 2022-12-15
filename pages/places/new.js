import Navbar from '../../components/Navbar'
import ImageUpload from '../../components/ImageUpload';
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import FormSelect from '../../components/FormSelect';
import cityController from '../../controllers/city'
import Image from 'next/image';
import { useSession } from 'next-auth/react';


export default function NewPlace({ cities }) {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (
        <>
            <Head>
                <title>Add-new-place-ITG</title>
            </Head>
            <h1 className={styles.headText}>Add new Place</h1>
            <div className={styles.image}>
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
            <div className={styles.form}>
                <form action='/api/places' method="POST">
                    <label htmlFor="name" className="form-label">Place Name</label><br />
                    <input className="form-control form-control-sm" type="text" id="name" name="name" />
                    <br />
                    <div className="form-floating">
                        <textarea className="form-control" name='description' id="description" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Description</label>
                    </div>
                    <label htmlFor="address" className="form-label">Address</label>
                    <input className="form-control form-control-sm" type="text" id="address" name="address" />
                    <br />
                    <ImageUpload></ImageUpload>
                    <br />
                    <FormSelect name='CityId' options={cities} />
                    <br />
                    <input className="btn btn-primary d-grid gap-2 col-9 mx-auto" type="submit" value="Submit" />
                </form>
            </div>
            <Navbar></Navbar>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const cities = await cityController.all();
    return {
        props: { cities },
    };
}