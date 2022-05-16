export const createTempExp = (tempExp) => {
  return (dispatch, getState) => {
    console.log("this is in the temp action", { tempExp });
    dispatch({ type: "CREATE_TEMP_EXPERIENCE", tempExp });
  };
};

export const eraseTempExp = (tempExp) => {
  return (dispatch, getState) => {
    // console.log("this is in the temp action", { tempExp });
    dispatch({ type: "ERASE_TEMP_EXPERIENCE", tempExp });
  };
};