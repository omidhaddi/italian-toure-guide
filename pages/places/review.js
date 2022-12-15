import React from 'react';
import Review from "../../components/Review"
import placeController from '../../controllers/place'
import FormSelectPlace from '../../components/FormSelectPlace';
import Navbar from '../../components/Navbar';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from '../../styles/Review.module.css'
import userController from '../../controllers/user'
import Head from 'next/head';



export default function ShowReview({ places, currentUser }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <>
      <Head>
        <title>review-ITG</title>
      </Head>
      <div className={styles.image}>
        {loading && <div>Loading...</div>}
        {session && (
          <Image
            src={session.user.image}
            alt="userImage"
            width={50}
            height={50}
            className={styles.image}
          />
        )}
        {!session && (
          <>
          </>
        )}
      </div>
      <br />
      <div style={{ margin: "10px" }}>
        <br />
        <form action='/api/review' method="POST">
          <FormSelectPlace name='PlaceId' options={places} />
          <br />
          <input hidden={true} type="number" id="UserId" name="UserId" value={currentUser.id} />
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
  const session = await getSession(req)
  let currentUser = null
  if (session) {
    currentUser = await userController.findEmail(session.user.email)

  }
  if (currentUser) {
    return {
      props: { currentUser, places },
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: `/signin`
      }
    }
  }
}
