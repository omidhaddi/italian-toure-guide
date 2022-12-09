import CityCard from "../../components/CityCard"
import Navbar from "../../components/Navbar";
import cityController from "../../controllers/city";
import styles from "../../styles/Card.module.css";




export default function ShowCities({ cities }) {
    console.log(cities);

    return (
        <>

            <div className={styles.grid}>
                {cities.map(city => <CityCard key={city.id} city={city}> </CityCard>)}
            </div>

            <Navbar></Navbar>
        </>
    )
}

export async function getServerSideProps(req, res) {

    const cities = await cityController.all()
    console.log(cities);
    return {

        props: { cities }
    }
}