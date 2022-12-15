import { getProviders, signIn } from "next-auth/react"
import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from '../../styles/Home.module.css'




export default function SignIn({ providers }) {
    return (
        <>
            <Head>
                <title>SignIn-ITG</title>
            </Head>
            <div className={styles.headText}>
                <h4>Please Sign in to Continue</h4>
            </div>
            <div style={{ textAlign: "center", marginTop: "260px" }}>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name} >
                        <button type="button" className="btn btn-outline-danger mb-3 d-grid gap-2 col-6 mx-auto" onClick={() => signIn(provider.id, {
                            callbackUrl: `/cities`,
                        })}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>

            <Navbar />
        </>
    );
}
export async function getServerSideProps(context) {
    return { props: { providers: await getProviders() } };
}