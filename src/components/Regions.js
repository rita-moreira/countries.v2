import React from "react";
import { selectRegion } from "../actions/index";
import { connect } from "react-redux";

const Regions = ({ regions, onClickSelectRegion }) => {
  // const onClickSelectRegion = (region) => {
  //   dispatch.selectRegion(region);
  // };
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

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSelectRegion: (region) => {
      dispatch(selectRegion(region));
    },
  };
};

export default connect(null, mapDispatchToProps)(Regions);
