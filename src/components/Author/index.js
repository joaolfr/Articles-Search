import React from "react";
import { Markup } from "interweave";

import { Wrapper } from "./styles";

const Author = ({ picture, description }) => {
  return (
    <Wrapper>
      <img src={picture} alt="author" />
      <Markup content={description} />
    </Wrapper>
  );
};

export default Author;
