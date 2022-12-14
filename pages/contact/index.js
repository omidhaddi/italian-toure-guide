import Image from "next/image";
import styles from "../../styles/contact.module.css"
import Navbar from "../../components/Navbar";
import italy from '../../public/images/italy.jpeg'

export default function Contact() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${italy.src})`,
                width: '100vw',
                height: '91vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
            >
                <h1 className={styles.container}>
                    Contact Info
                </h1>

                <div className={styles.container}>
                    <div className={styles.icon}>
                        <Image
                            src='/images/homeIcon.png'
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
                            height={30}
                            width={30}
                            alt="icon"
                        />
                        <h2>+393272746939</h2>
                    </div>
                    <br />
                    <div>
                        <Image
                            src='/images/emailIcon.png'

                            height={30}
                            width={30}
                            alt="icon"
                        />
                        <h2>Info@tourgiud.it</h2>
                    </div>
                    <br />
                    <div>
                        <Image
                            src='/images/facebookIcon.png'

                            height={30}
                            width={30}
                            alt="icon"

                        />
                        <h2>tourgiud-italy</h2>
                    </div>
                    <br />
                    <div>
                        <Image
                            src='/images/instagramIcon.png'
                            height={30}
                            width={30}
                            alt="icon"
                        />
                        <h2>tourgiud_italy</h2>
                    </div>
                </div>
            </div>
            <Navbar></Navbar>
        </>
    )
}
