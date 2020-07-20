import styled from "styled-components";

export const Card = styled.div`
  height: 170px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.darkPrimary};
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    opacity: 0.6;
  }
  p {
    margin: 0 !important;
  }
  img {
    height: 100%;
    width: 250px !important;
    max-width: 250px;
  }
  @media (max-width: 600px) {
    img {
      display: none;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 20px 10px 20px;
`;
export const TitleCard = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary} !important;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Description = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightSecondary};
  text-align: justify;
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
