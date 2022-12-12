import routeController from "../../../controllers/route"

export default async function handler(req, res) {
    const { PlaceId, UserId, price } = req.body
    const route = await routeController.create({
        PlaceId, UserId, price
    })
    console.log(route);
    res.status(200).redirect(`/routes`);
}