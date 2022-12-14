import Link from "next/link"
import Navbar from "../../components/Navbar"
import styles from '../../styles/Home.module.css'



export default function NewPlace() {

    return (
        <>
            <h4 className={styles.headText}>Thank you for sharing Your experience with us</h4>
            <br/>
            <br/>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href='/' className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Home</Link>
            </div>
            <br/>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href='/profile' className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">My Profile</Link>
            </div>
            <br/>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href='/contact' className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Contact Us</Link>
            </div>
            <br/>

            <Navbar></Navbar>
        </>

    )

}