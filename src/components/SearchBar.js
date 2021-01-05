import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const SearchBar = ({ searchItem, selectedRegion }) => {
  const [term, setTerm] = useState("");
  const onSearchTerm = (event) => {
    //send the search value to the parent component
    searchItem(event.target.value);
    setTerm(event.target.value);
  };

  //clean searchBar value everytime selected region changes
  useEffect(() => {
    setTerm("");
  }, [selectedRegion]);

  return (
    <div
      className="ui input"
      style={{
        marginTop: "80px",
        marginLeft: "50%",
        transform: "translate(-50%)",
        width: "50%",
      }}
    >
      <input
        value={term}
        onChange={onSearchTerm}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedRegion: state.selectedRegion };
};
export default connect(mapStateToProps)(SearchBar);
