import CityCard from "../../components/CityCard"
import cityController from "../../controllers/city";


export default function ShowCities({ cities }) {
    console.log(cities);

    return (
        <>
            {<div>
                {cities.map(city => <CityCard key={city.id} city={city}> </CityCard>)}
            </div>}
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