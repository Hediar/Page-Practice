import { styled } from "styled-components";

export const Select = styled.button`
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
  top: 655px;
  left: 18px;
  z-index: 100px;
  width: 290px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  color: black;
  list-style-type: none;
  padding: 0;
  border-radius: 6px;
  align-items: center;
  transition: 0.3s ease-in;
  &:active {
    max-height: 500px;
  }
`;

export const DetailList = styled.li`
  font-size: 12px;
  padding: 10px;
  &:hover {
    background-color: #c0c0c0;
  }
`;
