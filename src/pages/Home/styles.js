import styled from "styled-components";

export const Wrapper = styled.div`
  width: 900px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;
    display: flex;
    width: 400px;
    padding: 0 !important;
    justify-content: center;
  }
  li {
    margin-right: 15px;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  ul > li > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
  }
  .undefined {
    color: red !important;
    font-weight: 600;
  }
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallText = styled.span`
  font-weight: 400;
  font-size: 20;
  margin: 40px;
  color: ${(props) => props.theme.colors.secondary};
`;
