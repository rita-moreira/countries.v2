import { combineReducers } from "redux";

const selectedRegionReducer = (state = null, action) => {
  console.log("action");
  switch (action.type) {
    case "SELECT_REGION":
      console.log("action");
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  selectRegion: selectedRegionReducer,
});
