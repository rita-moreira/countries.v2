//select region
export const selectRegion = (region) => {
  return {
    type: "SELECT_REGION",
    payload: region,
  };
};

//select country
export const selectCountry = (country) => {
  return {
    type: "SELECT_COUNTRY",
    payload: country,
  };
};

//remove country
export const removeCountry = (country) => {
  return {
    type: "REMOVE_COUNTRY",
    payload: country,
  };
};
