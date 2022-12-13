import CityMap from '../../components/CityMap'
import Navbar from '../../components/Navbar'
import cityController from '../../controllers/city'
import styles from '../../styles/Card.module.css'
import Search from '../../components/Search'

export default function ShowRoute({ cities }) {

    return (
        <>
            <div >
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
            <Navbar />
        </>
    )
}

export async function getServerSideProps(req, res) {

    const cities = await cityController.all()

    return {
        props: { cities },
    }

}
