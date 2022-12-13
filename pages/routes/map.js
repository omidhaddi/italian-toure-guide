import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import placeController from '../../controllers/place'

export default function ShowRoute({ places }) {

    return (
        <>
            <div >

                <Map places={places} />
            </div>
            <br/>
            <Map places={places} />
            <br/>
            <Map places={places} />
            <Navbar />
        </>
    )
}

export async function getServerSideProps(req, res) {

    const places = await placeController.all()

    return {
        props: { places },
    }

}
