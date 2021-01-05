import React from "react";
import { selectRegion } from "../actions/index";

const Regions = ({ regions }) => {
  const onClickSelectRegion = (region) => {
    selectRegion(region);
  };
  const renderRegions = regions.map((region) => {
    return (
      <button
        onClick={() => onClickSelectRegion(region)}
        key={region.name}
        className="ui button"
      >
        {region.name}
      </button>
    );
  });
  return (
    <div
      className="ui five buttons"
      style={{ width: "50%", marginLeft: "50%", transform: "translate(-50%)" }}
    >
      {renderRegions}
    </div>
  );
};

export default Regions;
