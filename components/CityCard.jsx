import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function CityCard(props) {
  return (
    <div>
      <Link href=""> 
        <div className={styles.card}>
          <Image
            src="https://res.cloudinary.com/dgxasrrac/image/upload/v1670327296/unsigned-uploads/piazza-di-spagna_dcw5qv.jpg"
            alt="cities"
            width={400}
            height={180}
          ></Image>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  )
}




