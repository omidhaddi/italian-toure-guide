import placeController from "../../../controllers/place"

export default async function handler(req, res) {
    const { name, description, lon, lat, imageUrl, CityId } = req.body
    const place = await placeController.createNew({
        name, description, lon, lat, imageUrl, CityId
    })
    res.status(200).redirect(`/places/${place.id}`);
}

