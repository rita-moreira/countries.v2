import React from "react";

//components
import Regions from "./Regions";
import SelectedRegion from "./SelectedRegion";

const regions = [
  { name: "Africa", image: "./images/africa.png" },
  { name: "America", image: "./images/america.png" },
  { name: "Asia", image: "./images/asia.png" },
  { name: "Australia", image: "./images/australia.png" },
  { name: "Europa", image: "./images/europa.png" },
];

const App = () => {
  return (
    <div>
      <Regions regions={regions} />
      <SelectedRegion />
    </div>
  );
};

export default App;
