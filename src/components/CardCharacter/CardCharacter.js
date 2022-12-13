import React from "react";

export const CardCharacter = ({ name, image, species, status, nameOrigin}) => {
  return (
    <li className="card-characters">
      <h2 className="card-characters__name">{name}</h2>
      <img src={image} alt="foto del personaje" />
      <div className="card-characters__description">
      <p>{species}</p>
      <p>{status}</p>
      <p>{nameOrigin}</p>
      </div>
    </li>
  );
};
