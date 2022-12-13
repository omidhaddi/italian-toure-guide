import Image from "next/image";
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar";



export default function Contact() {
    return (
        <>
            <h1>
                <>Contact Us</>
            </h1>

            <div className={styles.container}>
                <div className={styles.icon}>
                    <Image
                        src='/images/phoneIcon.png'
                        className={styles.image}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <h2>Home</h2>
                </div>
                <br />
                <div>
                    <Image
                        src='/images/phoneIcon.png'
                        className={styles.image}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <h2>+393272746939</h2>
                </div>
                <br />
                <div>
                    <Image
                        src='/image/emailIcon.png'
 n                       className={styles.image}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <h2>Info@tourgiud.it</h2>
                </div>
                <br />
                <div>
                    <Image
                        src='/image/facebookIcon.png'
                        className={styles.image}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                     <h2>tourgiud-italy</h2>
                </div>
                <br />
                <div>
                    <Image
                        src='/image/instagramIcon.png'
                        className={styles.image}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <h2>tourgiud_italy</h2>
                </div>
                <Navbar></Navbar>
            </div>
        </>
    )
}
