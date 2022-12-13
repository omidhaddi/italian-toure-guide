<<<<<<< HEAD
import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import placeController from '../../controllers/place'

export default function ShowRoute({ places }) {
=======
import CityMap from '../../components/CityMap'
import Navbar from '../../components/Navbar'
import cityController from '../../controllers/city'
import styles from '../../styles/Card.module.css'
import Search from '../../components/Search'

export default function ShowRoute({ cities }) {
>>>>>>> main

    return (
        <>
            <div >
<<<<<<< HEAD

                <Map places={places} />
            </div>
            <br/>
            <Map places={places} />
            <br/>
            <Map places={places} />
=======
                <Search style={{
                    textAlign: 'center',
                    padding: '10px',
                    marginLeft: '40px',
                    marginTop: '20px'
                }} cities={cities} />
            </div>
            <div className={styles.map} >
                <CityMap cities={cities} />
            </div>
            <br />
>>>>>>> main
            <Navbar />
        </>
    )
}

export async function getServerSideProps(req, res) {

<<<<<<< HEAD
    const places = await placeController.all()

    return {
        props: { places },
=======
    const cities = await cityController.all()

    return {
        props: { cities },
>>>>>>> main
    }

}
