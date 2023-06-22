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
import { Select } from "./Components/Selects";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  // 모달 제어
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const modalRef = useRef();
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

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setModalOpen2(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // });

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
          <SmallButton color="#000000" onClick={showModal1}>
            open modal
          </SmallButton>
          <LargeButton color="#d63031" onClick={showModal2}>
            open modal
          </LargeButton>
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
            <div style={{ position: "relative" }}>
              <Select>
                <div>리액트</div>
                <div>▼</div>
              </Select>
            </div>
            <div style={{ position: "relative" }}>
              <Select>
                <div>리액트</div>
                <div>▼</div>
              </Select>
              <div>
                <li>리액트</li>
                <li>자바</li>
                <li>스프링</li>
                <li>리액트 네이티브</li>
              </div>
            </div>
          </div>
        </SelectBox>
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
          <div ref={modalRef}>
            <ModalBackground />
            <SecondModal>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
              <CloseButton onClick={closeModa2}>X</CloseButton>
            </SecondModal>
          </div>
        )}
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
