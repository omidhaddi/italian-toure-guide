import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function CityCard({ city }) {
  console.log(city);
  return (
    <>
      <Link href={`cities/${city.id}`}>
        <div className={styles.card}>
          <Image
            src={city.imageUrl}
            alt="city"
            width={150}
            height={120}
            className={styles.cardImage}
          ></Image>
          <h3>{city.name}</h3>
        </div>
      </Link>
    </>
  );
}
