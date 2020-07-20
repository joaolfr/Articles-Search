import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  padding: 5px;
  background: ${(props) => props.theme.colors.secondary};
  color: #fff;
  text-align: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  font-weight: 600;
  margin-right: 10px;
`;
