import React from 'react';
import Review from "../../components/Review"
import placeController from '../../controllers/place'
import FormSelectPlace from '../../components/FormSelectPlace';
import Navbar from '../../components/Navbar';


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
          <dev class="d-grid gap-2 col-6 mx-auto">
            <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
          </dev>
        </form>
      </div>
      <Navbar></Navbar>
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