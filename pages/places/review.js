import React from 'react';
// import ReactDOM from 'react-dom';
import Review from "../../components/Review"
import placeController from '../../controllers/place'
import FormSelectPlace from '../../components/FormSelectPlace';

export default function ShowReview({ places }) {

  return (
    <>
      <br />
      <div style={{ margin: "10px" }}>
        <FormSelectPlace name='PlaceId' options={places} />
        <br />
        <form action='/api/review' method="POST">
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "50px" }}
            ></textarea>
            <label for="floatingTextarea2">Titel</label>
          </div>
          <br />
          <div class="form-floating">
            <textarea
              name="comment"
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Write Your Comment Here</label>
          </div>
          <br />
          <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
        </form>
        <Review />
      </div>
    </>
  );
}


export async function getServerSideProps(req, res) {
  const places = await placeController.all();
  console.log(places);
  return {
    props: { places },
  };
}