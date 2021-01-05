//select region
export const selectRegion = (region) => {
  console.log(region);
  return {
    type: "SELECT_REGION",
    payload: region,
  };
};
