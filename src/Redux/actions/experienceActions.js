export const createExperiece = (experience) => {
  return (dispatch, getState) => {
    //make async call to db

    //{...experience add the user id and teh rest}
    fetch("http://localhost:8000/experiences/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    })
      .then(() => {
        console.log("uploaded to server succesfully");
        //what to do next....eg: history.push('/');
      })
      .then(() => {
        dispatch({ type: "CREATE_EXPERIENCE", experience });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_EXPERIENCE_ERROR", err });
      });
  };
};

export const fetchExperiences = () => {
  return (dispatch, getState) => {
    //make async call to db
    console.log("edfghjhgfd")
    //{...experience add the user id and teh rest}
    fetch("http://localhost:8000/experiences/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(experience),
    })
      .then((Response) => {
        console.log("downloaded from server succesfully");
        dispatch({ type: "FETCH_EXPERIENCES", Response});
        //what to do next....eg: history.push('/');
      })
      // .then(() => {
      //   // dispatch({ type: "FETCH_EXPERIENCES" });
      // })
      .catch((err) => {
        dispatch({ type: "CREATE_EXPERIENCE_ERROR", err });
      });
  };
};
