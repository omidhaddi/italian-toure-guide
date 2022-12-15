import reviewController from "../../../controllers/review"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { UserId, PlaceId, rating, comment } = req.body
        console.log(req.body);
        const review = await reviewController.create({
            UserId, PlaceId, rating, comment
        })
        console.log(review);
        res.status(200).redirect(`/places/reviewAnswer`);
    }
}

