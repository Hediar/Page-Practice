import { styled } from "styled-components";
import "./App.css";
import { useState } from "react";
import {
  LargeButton,
  MidiumButton,
  SmallButton,
} from "./StyleComponents/Buttons";
import {
  FisrtModal,
  ModalBackground,
  SecondModal,
} from "./StyleComponents/Modal";
import { Input } from "./StyleComponents/Inputs";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  // 가격 입력 제어, 정규표현식
  const formatNumber = (value) => {
    const onlyNum = value.replace(/[^\d]/g, "");
    const formattedNumber = onlyNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedNumber;
  };

  const numberHandler = (event) => {
    const value = event.target.value;
    setNum(formatNumber(value));
  };

  return (
    <div>
      <ButtonMarginBox
        style={{
          flexDirection: "column",
        }}
      >
        <h1>Button</h1>
        <ButtonMarginBox>
          <LargeButton
            color="#000000"
            onClick={() => alert("버튼을 만들어보세요")}
          >
            Large Primary Button
          </LargeButton>
          <MidiumButton color="#000000">Medium</MidiumButton>
          <SmallButton color="#000000">Small</SmallButton>
        </ButtonMarginBox>
        <ButtonMarginBox>
          <LargeButton
            color="#d63031"
            onClick={() => {
              prompt("어렵나요?");
            }}
          >
            Large Primary Button
          </LargeButton>
          <MidiumButton color="#d63031">Medium</MidiumButton>
          <SmallButton color="#d63031">Small</SmallButton>
        </ButtonMarginBox>
      </ButtonMarginBox>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(`name: ${name}, price: ${num}`);
        }}
      >
        <h1>Input</h1>
        <InputMarginBox>
          <div>
            <label>이름</label>
            <Input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></Input>
          </div>
          <div>
            <label>가격</label>
            <Input
              placeholder="0"
              type="text"
              value={num}
              onChange={numberHandler}
            ></Input>
          </div>
          <SmallButton color="#000000">저장</SmallButton>
        </InputMarginBox>
      </form>
      <div>
        <h1>Modal</h1>
        <ButtonMarginBox>
          <SmallButton color="#000000">open modal</SmallButton>
          <LargeButton color="#d63031">open modal</LargeButton>
        </ButtonMarginBox>
      </div>
      <div>
        <SelectBox>
          <h1>Select</h1>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <div>
              <button>리액트</button>
            </div>
            <div>
              <button>리액트</button>
            </div>
          </div>
        </SelectBox>
      </div>
      <div id="modal">
        {/* <ModalBackground />
        <FisrtModal>
          <div>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </div>
          <div>
            <button>닫기</button>
            <button>확인</button>
          </div>
        </FisrtModal> */}
        {/* <SecondModal>
          닫기 버튼 1개가 있고, <br />
          외부 영역을 누르면 모달이 닫혀요.
          <button>X</button>
        </SecondModal> */}
      </div>
    </div>
  );
}

export default App;

const ButtonMarginBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const InputMarginBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;
