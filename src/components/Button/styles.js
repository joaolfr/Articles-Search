import styled from "styled-components";

export const SimpleButton = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  outline: none;
  border-radius: 30px;
  padding: 0 10px 0 10px;
  color: #fff;
  font-family: Poppins;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  font-weight: 600;
  width: 100px;
  transition: ease-in-out 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background: #fff;
    cursor: pointer;
  }
`;
