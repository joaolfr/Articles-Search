import React from "react";
import { Markup } from "interweave";

import {
  ArticleInfoWrapper,
  SmallTitle,
  CategoriesWrapper,
  TagsWrapper,
} from "./styles";
import { Author, CategoriesCard } from "../index";

const ArticleInfo = ({
  picture,
  description,
  categories,
  tags,
  bibliography,
}) => {
  return (
    <ArticleInfoWrapper>
      <SmallTitle>Sobre o autor</SmallTitle>
      <Author picture={picture} description={description} />
      {/* Categorie */}
      <SmallTitle>Categorias</SmallTitle>
      <CategoriesWrapper>
        {categories.map((category) => (
          <CategoriesCard key={category.id} category={category.name} />
        ))}
      </CategoriesWrapper>
      {/* Tags */}
      <SmallTitle>Tags</SmallTitle>
      <TagsWrapper>
        {tags.map((tag) => (
          <span key={tag.id}>#{tag.name}</span>
        ))}
      </TagsWrapper>
      {/* Bibliography */}
      <SmallTitle>Bibliografia</SmallTitle>
      <Markup content={bibliography} />
    </ArticleInfoWrapper>
  );
};

export default ArticleInfo;
