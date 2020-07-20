import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  span {
    font-size: 10px;
  }
  img {
    margin-right: 5px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
