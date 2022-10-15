import React, { useEffect, useState } from 'react';

import api  from '../common/api/api';

export const App = () => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () =>{
    const data = await api.get("/character");
    setCharacters(data.res.results);
    console.log(data);
  };

  return (
    <div>
      <h1>Personajes</h1>
      <ul>
        {characters.map(item => (
          <li>
            <h2>{item.name}</h2>
            <img src={item.image} alt="foto del personaje"/>
            <p>{item.species}</p>
            <p>{item.status}</p>
            <p>{item.origin.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};



