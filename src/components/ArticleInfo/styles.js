import styled from "styled-components";

export const SmallTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
`;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 200px !important;
    max-height: 200px !important;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
