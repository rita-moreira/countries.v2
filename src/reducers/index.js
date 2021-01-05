import { combineReducers } from "redux";

const selectedRegionReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_REGION":
      return action.payload;
    default:
      return state;
  }
};

const selectedCountriesReducer = (countries = [], action) => {
  switch (action.type) {
    case "SELECT_COUNTRY":
      return [
        action.payload,
        ...countries.filter((val) => val.name !== action.payload.name),
      ];
    case "REMOVE_COUNTRY":
      return countries.filter((elem) => elem !== action.payload);
    default:
      return countries;
  }
};

export default combineReducers({
  selectedRegion: selectedRegionReducer,
  selectedCountry: selectedCountriesReducer,
});
