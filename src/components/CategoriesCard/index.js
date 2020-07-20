import React from "react";
import { Wrapper } from "./styles";

const CategoriesCard = ({ category }) => {
  return (
    <Wrapper>
      <span>{category}</span>
    </Wrapper>
  );
};

export default CategoriesCard;
