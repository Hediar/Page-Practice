import { styled } from "styled-components";

export const Select = styled.select`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  cursor: pointer;
`;

export const OptionList = styled.ul`
  position: absolute;
  top: 28px;
  left: 0;
  width: 100%;
  background: white;
  color: #fff;
  list-style-type: none;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  max-height: 0;
  transition: 0.3s ease-in;
  &:active {
    max-height: 500px;
  }
`;
