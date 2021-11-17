import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarwars } from "./starwarsAPI";
import StarwarsChar from "./StarwarsChar";
import { selectStarwars } from "./starwarsSlice";

//Component JSX
const Starwars = () => {
  const starwars = useSelector(selectStarwars);
  const dispatch = useDispatch();
  const [charToDisplay, setCharToDisplay] = useState(0);

  useEffect(() => {
    dispatch(fetchStarwars());
  }, [dispatch, starwars]);

  const handleClick = (index) => {
    setCharToDisplay(index);
  };

  const starwarsNames = starwars.map((character, index) => {
    return (
      <div
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(index)}
        key={index}
      >
        <h2>{character.name}</h2>
        <div>
          {index === charToDisplay ? (
            <StarwarsChar character={character} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 style={{ marginLeft: "40px", color: "#764abc" }}>
        Starwars List with Redux
      </h1>
      <ul>{starwarsNames}</ul>
    </div>
  );
};

export default Starwars;
