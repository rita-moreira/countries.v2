import React from "react";
import { connect } from "react-redux";

const SelectedRegion = () => {
  return <div>SelectedRegion</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(SelectedRegion);
