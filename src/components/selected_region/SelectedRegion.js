import React from "react";
import { connect } from "react-redux";

import SelectedRegionContainer from "./SelectedRegionContainer";

const SelectedRegion = (props) => {
  if (!props.selectedRegion) {
    return (
      <div>
        <SelectedRegionContainer
          img="../images/continents.png"
          text="Please, select a region"
        />
      </div>
    );
  }
  return (
    <div>
      <SelectedRegionContainer
        img={props.selectedRegion.image}
        text={props.selectedRegion.name}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedRegion: state.selectedRegion };
};

export default connect(mapStateToProps)(SelectedRegion);
