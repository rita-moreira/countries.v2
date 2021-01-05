import React from "react";
import { connect } from "react-redux";

//components
import Regions from "./Regions";
import SelectedRegion from "./selected_region/SelectedRegion";
import Countries from "./Countries";
import SideBar from "./SideBar";

const regions = [
  { name: "Africa", image: "./images/africa.png" },
  { name: "Americas", image: "./images/america.png" },
  { name: "Asia", image: "./images/asia.png" },
  { name: "Oceania", image: "./images/australia.png" },
  { name: "Europe", image: "./images/europa.png" },
];

const App = ({ numberOfCountriesSelected }) => {
  return (
    <div>
      <Regions regions={regions} />
      <SelectedRegion />
      <Countries />
      {numberOfCountriesSelected > 0 ? <SideBar /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numberOfCountriesSelected: state.selectedCountry.length };
};

export default connect(mapStateToProps)(App);
