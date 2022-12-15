import placeController from "../../../controllers/place"

export default async function handler(req, res) {
    const place = await placeController.create(req.body)
    res.status(200).redirect(`/places/${place.id}`);
}

