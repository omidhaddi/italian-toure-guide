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
        <br />
        <form action='/api/review' method="POST">
          <FormSelectPlace name='PlaceId' options={places} />
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
          <Review />
          <br />
          <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
        </form>
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