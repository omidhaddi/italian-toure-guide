import Image from "next/image";
import styles from "../styles/Home.module.css"
import homeIcon from "../components/images/homeIcon.png"
import phoneIcon from "../components/images/phoneIcon.png"
import emailIcon from "../components/images/emailIcon.png"
import facebookIcon from "../components/images/facebookIcon.png"
import instagramIcon from "../components/images/instagramIcon.png"
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
                        src={homeIcon}
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
                        src={phoneIcon}
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
                        src={emailIcon}
                        className={styles.image}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <h2>Info@tourgiud.it</h2>
                </div>
                <br />
                <div>
                    <Image
                        src={facebookIcon}
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
                        src={instagramIcon}
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
