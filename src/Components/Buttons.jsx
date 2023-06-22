import { styled } from "styled-components";

export const LargeButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
  height: 50px;
  width: 200px;
  border: 3px solid
    ${(props) =>
      props.color === "#000000" ? "rgb(85, 239, 196)" : "rgb(250, 177, 160)"};
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  &:active {
    background-color: ${(props) =>
      props.color === "#000000" ? "rgb(79, 175, 148)" : "rgb(219, 106, 80)"};
  }
`;

export const MidiumButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) =>
    props.color === "#000000" ? "rgb(85, 239, 196)" : "rgb(250, 177, 160)"};
  color: ${(props) => props.color};
  height: 45px;
  width: 130px;
  &:active {
    background-color: ${(props) =>
      props.color === "#000000" ? "rgb(79, 175, 148)" : "rgb(219, 106, 80)"};
  }
`;

export const SmallButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) =>
    props.color === "#000000" ? "rgb(85, 239, 196)" : "rgb(250, 177, 160)"};
  color: ${(props) => props.color};
  height: 40px;
  width: 100px;
  &:active {
    background-color: ${(props) =>
      props.color === "#000000" ? "rgb(79, 175, 148)" : "rgb(219, 106, 80)"};
  }
`;

export const CloseButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
  position: absolute;
  top: 12px;
  right: 12px;
`;
