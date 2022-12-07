import React, { useState } from "react";
import styles from "../styles/Search.module.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const cities = [{ name: "Milano" }, { name: "Mantova" }, { name: "Roma" }];

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event);
    setSearchInput(event.target.value);
  };

  if (searchInput.length > 0) {
    cities.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="search"
          className="form-control"
          placeholder="Search your city"
          onChange={handleChange}
          value={searchInput}
        />

        {/* <ul>
          {cities.map((city) => (
            <li key={city.name}>{city.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Search;
