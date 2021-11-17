//Make the request to the endpoint (https://swapi.dev/) and use dispatch to pass the data to the slice

export const fetchStarwars = () => (dispatch) =>
  fetch("https://swapi.dev/api/people").then(async (response) => {
    const data = await response.json();
    dispatch({
      type: "starwars/setStarwars",
      payload: data.results,
    });
  });
