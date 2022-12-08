import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Search.module.css";

const Search = () => {
  const cityList = [{ name: "Milano" }, { name: "Mantova" }, { name: "Roma" }];

  const [cities, setCities] = useState(cityList);

  // search the cities
  // when the input changes
  // filter the cities by input value
  // set cities to the new filtered array
  //show the cities in the list

  const handleChange = (event) => {
    event.preventDefault();
    const searchInput = event.target.value;
    if (searchInput.length > 0) {
      const newCities = cityList.filter((city) =>
        city.name.toLowerCase().includes(searchInput)
      );
      setCities(newCities);
    }
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="search"
          className="form-control"
          placeholder="Search your city"
          onChange={handleChange}
        />

        <ul>
          {cities.map((city) => (
            <Link href="/" key={city.name}>
              <li key={city.name}>{city.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
