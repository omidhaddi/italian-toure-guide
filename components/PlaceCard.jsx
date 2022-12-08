import Image from "next/image"
// import Link from "next/link"
// import styles from "../styles/Home.module.css"

export default function PlaceCard() {
  const imageUrl = "https://images.unsplash.com/photo-1619731418868-16dfac8d39ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  const name = "piazza di spagna"
  return (
    <div>
      <Image
        src={imageUrl}
        height="100"
        width="100"
        alt="image of place"
      />
      <h3>{name}</h3>

    </div>

  )
}

