import React from "react";
import { SimpleButton } from "./styles";
const Button = ({ search }) => {
  return (
    <SimpleButton SimpleButton onClick={search}>
      Buscar
    </SimpleButton>
  );
};
export default Button;
