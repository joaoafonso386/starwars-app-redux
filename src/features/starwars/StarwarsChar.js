import React from "react";

//Individual info from character passed with props
const StarwarsChar = ({ character }) => {
  return (
    <div>
      <p>Height: {character.height}cm</p>
      <p>Gender: {character.gender}</p>
      <p>Birth year: {character.birth_year}</p>
    </div>
  );
};

export default StarwarsChar;
