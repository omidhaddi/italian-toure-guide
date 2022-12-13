import { useState } from "react";
import styles from "../styles/Search.module.css";
import CityCard from "./CityCard";
import CityMap from "./CityMap";

const Search = ({ cities }) => {
  const [allCities, setallCities] = useState(cities);

  // search the cities
  // when the input changes
  // filter the cities by input value
  // set cities to the new filtered array
  //show the cities in the list

  const handleChange = (event) => {
    event.preventDefault();
    const searchInput = event.target.value;
    if (searchInput.length > 0) {
      const newCities = cities.filter((city) =>
        city.name.toLowerCase().includes(searchInput)
      );
      setallCities(newCities);
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
        <div className={styles.map}>
          <CityMap cities={cities} />
        </div>
        <div>
          {allCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
