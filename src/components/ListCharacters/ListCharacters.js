import React from "react";

import { CardCharacter } from "../CardCharacter/CardCharacter";

export const ListCharacters = ({characters}) => {

  return (
    <div className="list-characters">
      <ul className="list-characters__details">
        {characters.map((item) => (
          <CardCharacter name={item.name} image={item.image} species={item.species} status={item.status} nameOrigin={item.origin.name} />
        ))}
      </ul>
    </div>
  );
};
