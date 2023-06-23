import { styled } from "styled-components";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  LargeButton,
  MidiumButton,
  SmallButton,
} from "./Components/Buttons";
import { FisrtModal, ModalBackground, SecondModal } from "./Components/Modal";
import { Input } from "./Components/Inputs";
import { DetailList, OptionList, Select } from "./Components/Selects";
import { VscBellDot, VscChevronRight } from "react-icons/vsc";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  // 모달 제어
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const showModal1 = () => {
    setModalOpen1(true);
  };

  const showModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal = () => {
    setModalOpen1(false);
  };

  const closeModa2 = () => {
    setModalOpen2(false);
  };

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

  // select 제어
  const [selectState, setselectState] = useState(false);
  const [selectValue, setselectValue] = useState("리액트");

  const [selectState2, setselectState2] = useState(false);
  const [selectValue2, setselectValue2] = useState("리액트");

  const showSelect = () => {
    setselectState(true);
  };

  const showSelect2 = () => {
    setselectState2(true);
  };

  const selectedValue = (event) => {
    setselectValue(event.target.innerText);
    setselectState(false);
  };

  const selectedValue2 = (event) => {
    setselectValue2(event.target.innerText);
    setselectState2(false);
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
            <ButtonSubBox>
              Large Primary Button
              <VscChevronRight />
            </ButtonSubBox>
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
            <ButtonSubBox>
              Large Primary Button
              <VscBellDot />
            </ButtonSubBox>
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
          <SmallButton color="#000000" onClick={showModal1}>
            open modal
          </SmallButton>
          <LargeButton color="#d63031" onClick={showModal2}>
            open modal
          </LargeButton>
        </ButtonMarginBox>
      </div>
      <div>
        <div style={{ position: "relative" }}>
          <SelectBox>
            <h1>Select</h1>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Select onClick={showSelect}>
                  <div>{selectValue}</div>
                  <div>▼</div>
                </Select>
              </div>
              <div style={{ position: "relative" }}>
                <Select onClick={showSelect2}>
                  <div>{selectValue2}</div>
                  <div>▼</div>
                </Select>
                {selectState2 && (
                  <div>
                    <OptionList
                      style={{
                        top: "28px",
                        left: "6px",
                      }}
                    >
                      <DetailList onClick={selectedValue2}>리액트</DetailList>
                      <DetailList onClick={selectedValue2}>자바</DetailList>
                      <DetailList onClick={selectedValue2}>스프링</DetailList>
                      <DetailList onClick={selectedValue2}>
                        리액트네이티브
                      </DetailList>
                    </OptionList>
                  </div>
                )}
              </div>
            </div>
          </SelectBox>
        </div>
      </div>
      <div id="modal">
        {modalOpen1 && (
          <div>
            <ModalBackground />
            <FisrtModal>
              <div>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
              </div>
              <ButtonMarginBox
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                }}
              >
                <SmallButton color="#d63031" onClick={closeModal}>
                  닫기
                </SmallButton>
                <SmallButton color="#000000">확인</SmallButton>
              </ButtonMarginBox>
            </FisrtModal>
          </div>
        )}
        {modalOpen2 && (
          <div>
            <ModalBackground onClick={closeModa2} />
            <SecondModal>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
              <CloseButton onClick={closeModa2}>X</CloseButton>
            </SecondModal>
          </div>
        )}
      </div>
      {selectState && (
        <div>
          <OptionList>
            <DetailList onClick={selectedValue}>리액트</DetailList>
            <DetailList onClick={selectedValue}>자바</DetailList>
            <DetailList onClick={selectedValue}>스프링</DetailList>
            <DetailList onClick={selectedValue}>리액트네이티브</DetailList>
          </OptionList>
        </div>
      )}
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

const ButtonSubBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 7px;
`;

const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden; // 바깥으로 나가면 안보임
  position: relative;
  margin: 50px 10px 10px 10px;
`;
