import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//api
import restCountries from "../api/restCountries";

//components
import SearchBar from "./SearchBar";

//actions
import { selectCountry } from "../actions";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const searchItem = (search) => {
    setSearch(search);
    const regex = search.toUpperCase();
    const elem = countries.filter((elem) =>
      elem.name.toUpperCase().startsWith(regex)
    );
    setResultSearch(elem);
  };

  useEffect(() => {
    const countriesData = async () => {
      if (props.selectedRegion) {
        const response = await restCountries.get(
          `${props.selectedRegion.name}`
        );
        setCountries(response.data);
        //sempre que muda a regiao limpa a searchBar
        setSearch("");
        setResultSearch([]);
      }
    };
    countriesData();
  }, [props.selectedRegion]);

  //se não tivermos nada no input search então mostra os países todos da região,
  //se tiver então mostra os países em que as letras correspondem ao que foi adicionado na input
  let showCountries = [];
  if (search === "") {
    showCountries = countries;
  } else {
    showCountries = resultSearch;
  }
  const renderCountries = showCountries.map((country) => {
    return (
      <div style={{ marginLeft: "50%" }} className="item" key={country.name}>
        <div className="ui small image">
          <img
            className="ui avatar image"
            src={country.flag}
            alt={country.name}
          />
        </div>
        <div className="middle aligned content">
          <div className="header">{country.name}</div>
          <div className="description">
            <p>{country.capital}</p>
          </div>
          <div className="extra">
            <div
              className="ui right floated button primary"
              onClick={() => {
                props.selectCountry(country);
              }}
            >
              Select
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <SearchBar searchItem={searchItem} />
      <div
        style={{ width: "50%", textAlign: "left", marginTop: "100px" }}
        className=" ui  divided items"
      >
        {renderCountries}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedRegion: state.selectedRegion };
};
export default connect(mapStateToProps, { selectCountry })(Countries);
