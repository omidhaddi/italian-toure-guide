import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function CityCard({ city }) {
  console.log(city);
  return (
    <>
      <Link href={`cities/details`}>
        <div className={styles.card}>
          <Image src={city.imageUrl} alt="city" width={50} height={50}></Image>
          <h3>{city.name}</h3>
        </div>
      </Link>
    </>
  );
}
