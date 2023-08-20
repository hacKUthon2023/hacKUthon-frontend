import { styled } from "styled-components";
import { IcBacBtn } from "../assets/icon";
import OtpInput from "react-otp-input";
import { useState } from "react";

const SubWayNum = () => {
  const [code, setCode] = useState("");

  return (
    <SubwayNumWrapper>
      <SubWayNumHeader>
        <IcBacBtn />
      </SubWayNumHeader>
      <SubWayNumContainer>
        <SubWayNumTitle>열차번호</SubWayNumTitle>
        {/* <SubwayNumInput
          placeholder="열차 번호 입력하기"
          type="number"
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
        /> */}
        <InputContainer>
          <OtpInput
            value={code}
            onChange={setCode}
            numInputs={4}
            inputType={"tel"}
            inputStyle={{
              margin: "0 0.8rem 0 0.8rem",
              border: "1px solid #E3E5E5",
              borderRadius: "2.4rem",
              width: "4.8rem",
              height: "4.8rem",
              fontSize: "1.6rem",
              color: "#72777A",
              fontWeight: "400",
              caretColor: "#72777A",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </InputContainer>

        <SubwayNumDetail>쏼라쏼라</SubwayNumDetail>
        <SubwayNumBtn>내 열차 찾기</SubwayNumBtn>
      </SubWayNumContainer>
    </SubwayNumWrapper>
  );
};

export default SubWayNum;

const SubwayNumWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubWayNumHeader = styled.header`
  display: flex;
`;

const SubWayNumContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubWayNumTitle = styled.h1``;

const InputContainer = styled.div`
  &.SubwayNumInput {
    height: 10rem;
    width: 1.6rem;
    border: 5rem;
  }
`;

const SubwayNumDetail = styled.p``;

const SubwayNumBtn = styled.button``;
