import React, { useEffect, useState } from "react";

import api from "../../common/api/api";
import { CardCharacter } from "../CardCharacter/CardCharacter";

export const ListCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const data = await api.get("/character");
    setCharacters(data.res.results);
    console.log(data);
  };

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
