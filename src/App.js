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
import { OptionList, Select } from "./Components/Selects";

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

  // select

  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
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
              <svg
                width="10"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#000000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
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
              <svg
                width="14"
                height="17"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 23.5C11.1046 23.5 12 22.6046 12 21.5C12 20.3954 11.1046 19.5 10 19.5C8.89543 19.5 8 20.3954 8 21.5C8 22.6046 8.89543 23.5 10 23.5ZM10 26C12.4853 26 14.5 23.9853 14.5 21.5C14.5 19.0147 12.4853 17 10 17C7.51472 17 5.5 19.0147 5.5 21.5C5.5 23.9853 7.51472 26 10 26Z"
                  fill="black"
                ></path>
                <path
                  d="M0 11C0 5.47715 4.47715 1 10 1C15.5228 1 20 5.47715 20 11V19C20 20.1046 19.1046 21 18 21H2C0.895431 21 0 20.1046 0 19V11Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5 18.5V11C17.5 6.85786 14.1421 3.5 10 3.5C5.85786 3.5 2.5 6.85786 2.5 11V18.5H17.5ZM10 1C4.47715 1 0 5.47715 0 11V19C0 20.1046 0.895431 21 2 21H18C19.1046 21 20 20.1046 20 19V11C20 5.47715 15.5228 1 10 1Z"
                  fill="black"
                ></path>
                <circle cx="17.5" cy="4.5" r="4.5" fill="#EB4C4C"></circle>
              </svg>
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
                <Select>
                  {/* <div>리액트</div>
                <div>▼</div> */}
                </Select>
                <OptionList>
                  <li>리액트</li>
                  <li>자바</li>
                  <li>스프링</li>
                  <li>리액트네이티브</li>
                </OptionList>
              </div>
              <div style={{ position: "relative" }}>
                <Select onChange={handleChange}>
                  {/* <div>리액트</div>
                <div>▼</div> */}
                </Select>
              </div>
            </div>
          </SelectBox>
          {/* <OptionList>
            <li>리액트</li>
            <li>자바</li>
            <li>스프링</li>
            <li>리액트네이티브</li>
          </OptionList> */}
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
          <div ref={modalRef}>
            <ModalBackground onClick={closeModa2} />
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
