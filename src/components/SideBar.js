import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

//actions
import { removeCountry } from "../actions";

//components
import SearchBar from "./SearchBar";

const SideBar = ({ selectedCountries, removeCountry, selectedRegion }) => {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  let showSelectedCountries = [];
  if (search === "") {
    showSelectedCountries = selectedCountries;
  } else {
    showSelectedCountries = resultSearch;
  }

  const OnRemoveCountry = (country) => {
    removeCountry(country);
    setResultSearch(showSelectedCountries.filter((elem) => elem !== country));
  };

  const searchItem = (search) => {
    console.log("correu");
    setSearch(search);
    const regex = search.toUpperCase();
    const elem = showSelectedCountries.filter((elem) =>
      elem.name.toUpperCase().startsWith(regex)
    );
    setResultSearch(elem);
  };

  //sempre que muda a regiao limpa a searchBar
  useEffect(() => {
    setSearch("");
    setResultSearch([]);
  }, [selectedRegion]);

  const renderSelectedCountries = showSelectedCountries.map((country) => {
    return (
      <div key={country.name} className="ui card">
        <div className="image">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="content">
          <h1
            className="header"
            style={{ fontSize: "15px", textAlign: "center" }}
          >
            {country.name}
          </h1>
          <div className="description">
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>SubRegion: {country.subregion}</p>
          </div>
        </div>
        <button
          onClick={() => OnRemoveCountry(country)}
          className="negative right floated ui button"
        >
          Remove
        </button>
      </div>
    );
  });
  return (
    <div className="ui left sidebar visible">
      <h3
        className="ui header"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Selected Countries
      </h3>
      <SearchBar searchItem={searchItem} />
      <div className="ui divided list"> {renderSelectedCountries} </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountries: state.selectedCountry,
    selectedRegion: state.selectedRegion,
  };
};
export default connect(mapStateToProps, { removeCountry })(SideBar);
