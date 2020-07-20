import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

export const Wrapper = styled.div`
  text-align: justify;
  padding: 20px;
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    img {
      max-height: 250px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TagsWrapper = styled.div``;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 200px !important;
    max-height: 200px !important;
  }
`;

export const BackIcon = styled(IoIosArrowRoundBack).attrs((props) => ({
  size: 60,
  color: props.theme.colors.lightSecondary,
}))`
  margin-right: 20px;
`;

export const Empty = styled.div`
  height: 60px;
  width: 60px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 5px;
  background: ${(props) => props.theme.colors.secondary};
  margin: 10px 0 20px 0;
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
`;

export const SmallTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
`;
