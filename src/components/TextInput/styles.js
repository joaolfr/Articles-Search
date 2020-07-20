import styled from "styled-components";
import { IoIosSearch, IoIosCloseCircle } from "react-icons/io";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.darkPrimary};

  border-radius: 25px;
  padding: 10px;
  align-items: center;
`;

export const Select = styled.select`
  background: transparent;
  border-width: 0;
  font-family: Poppins;
  outline: none;
`;

export const Input = styled.input`
  background: transparent;
  border-width: 0;
  width: 100%;
  font-family: Poppins;
  font-size: 14px;
  outline: none;
`;
export const SearchIcon = styled(IoIosSearch).attrs((props) => ({
  size: 30,
  color: props.theme.colors.lightSecondary,
}))`
  margin-right: 10px;
`;

export const ClearIcon = styled(IoIosCloseCircle).attrs((props) => ({
  size: 20,
  color: props.theme.colors.lightSecondary,
}))`
  margin-right: 10px;
  cursor: pointer;
`;
