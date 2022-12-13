import React from "react";

import { ListCharacters } from "../../components/ListCharacters/ListCharacters";
import { Pagination } from "../../components/Pagination/Pagination";

export const Home = () => {
  return (
    <div className="home">
      <div className="home home__center">
        <img
          className="home home__title"
          src="./titulo.png"
          alt="letrero de la serie"
        />
        <input
          className="home home__input"
          placeholder="Search for characters"
        />
      </div>
      <ListCharacters />
      <Pagination pages={5} />
    </div>
  );
};
