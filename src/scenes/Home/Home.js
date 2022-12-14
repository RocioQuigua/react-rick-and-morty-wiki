import React, { useEffect, useState } from "react";
import { Filters } from "../../components/Filters/Filters";
import { InputSearch } from "../../components/InputSearch/InputSearch";

import { ListCharacters } from "../../components/ListCharacters/ListCharacters";
import { Navbar } from "../../components/Navbar/Navbar";
import { Pagination } from "../../components/Pagination/Pagination";

import api from "../../common/api/api";

export const Home = () => {

  const [total, setTotal] = useState();
  const [currentPage, setCurrentPage] = useState();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async (page = 1) => {
    const data = await api.get(`/character?page=${page}`);
    setTotal(data.res.info.pages);
    setCharacters(data.res.results);
    setCurrentPage(page)
  };

  return (
    <div className="home">
      <Navbar/>
      <div className="home home__center">
        <img
          className="home home__title"
          src="./titulo.png"
          alt="letrero de la serie"
        />
        <InputSearch />
      </div>
      <div className="home home__filters">
        <Filters />
      </div>
      <ListCharacters characters={characters} />
      <Pagination pages={total} onClick={handleData} page={currentPage} />
    </div>
  );
};
