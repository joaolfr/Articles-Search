import React from "react";
import { Card, InfoWrapper, TitleCard, Description } from "./styles";

const ArticleCard = ({ title, description, picture }) => {
  return (
    <Card>
      {picture && <img src={picture} alt="" />}

      <InfoWrapper>
        <TitleCard>{title}</TitleCard>
        <Description>{description}</Description>
      </InfoWrapper>
    </Card>
  );
};

export default ArticleCard;
