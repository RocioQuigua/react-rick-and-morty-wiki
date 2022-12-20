import React from "react";

import { Input } from "antd";

export const InputSearch = () => {
  const {Search} = Input;
  const onSearch = (value) => console.log(value);
  
  return <Search
    className="input-search" 
    placeholder="Search for characters" 
    allowClear
    onSearch={onSearch}
  />;
};
