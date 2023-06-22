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
`;
