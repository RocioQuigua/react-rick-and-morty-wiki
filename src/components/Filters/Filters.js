import React from "react";
import { Select } from "antd";

export const Filters = () => {
  const species = [
    {
      name: "Human",
      value: "Human",
    },
    {
      name: "Alien",
      value: "Alien",
    },
    {
      name: "Mythological",
      value: "Mythological",
    },
  ];
  const states = [
    {
      name: "Alive",
      value: "Alive",
    },
    {
      name: "Dead",
      value: "Dead",
    },
    {
      name: "Unknown",
      value: "Unknown",
    },
  ];

  const ubications = [
    {
      name: "Earth",
      value: "Earth",
    },
    {
      name: "Abadango",
      value: "Abadango",
    },
    {
      name: "Unknown",
      value: "Unknown",
    },
    {
      name: "Fantasy World",
      value: "Fantasy World",
    },
  ];

  return (
    <div className="filters">
      <h1 className="filters__title">Filters</h1>
      <Select
        className="filters__selectors"
        placeholder="Specie"
        onChange={(value) => console.error(value)}
      >
        {species.map((specie, index) => (
          <Select.Option key={index} value={specie.value}>
            {specie.name}
          </Select.Option>
        ))}
      </Select>
      <Select
        className="filters__selectors"
        placeholder="State"
        onChange={(value) => console.error(value)}
      >
        {states.map((state, index) => (
          <Select.Option key={index} value={state.value}>
            {state.name}
          </Select.Option>
        ))}
      </Select>
      <Select
        className="filters__selectors"
        placeholder="Ubication"
        onChange={(value) => console.error(value)}
      >
        {ubications.map((ubication, index) => (
          <Select.Option key={index} value={ubication.value}>
            {ubication.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
