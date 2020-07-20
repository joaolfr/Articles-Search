import React, { useState, useEffect } from "react";
import { SearchIcon } from "./styles";
import { Wrapper, Input, ClearIcon, Select } from "./styles";

const TextInput = ({
  searchKeyword,
  setSearchKeyword,
  clearKeyword,
  filter,
  setFilter,
}) => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input
        type="text"
        placeholder="Pesquise por um assunto, autor ou área de interesse"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <ClearIcon onClick={clearKeyword} />
      <Select
        name="order"
        id="relevance"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="relevance">mais relevante</option>
        <option value="without">sem filtro</option>
      </Select>
    </Wrapper>
  );
};
export default TextInput;
