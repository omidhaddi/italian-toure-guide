import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function PlaceCard({ place }) {
  // const imageUrl = "https://images.unsplash.com/photo-1619731418868-16dfac8d39ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  // const name = "piazza di spagna"
  return (
    <Link href={`/places/${place.id}`}>
      <div className={styles.card}>
        <Image
          src={place.imageUrl}
          height={130}
          width={130}
          className={styles.cardImage}
          alt="image of place"
        />
        <h6
          style={{
            paddingTop: "10px",
          }}
        >
          {place.name}
        </h6>
      </div>
    </Link>
  );
}
