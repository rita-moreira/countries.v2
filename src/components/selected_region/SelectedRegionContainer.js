import React from "react";

const SelectedRegionContainer = ({ img, text }) => {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <img
        style={{ backgroundColor: "whitesmoke" }}
        className="ui small centered circular image"
        src={img}
        alt="continents"
      />
      <h1 style={{ fontSize: "12px" }}>{text}</h1>
    </div>
  );
};

export default SelectedRegionContainer;
