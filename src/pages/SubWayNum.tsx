import { styled } from "styled-components";
import OtpInput from "react-otp-input";
import { useState } from "react";
import PageLayout from "../components/common/PageLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
// import client from "../lib/axios";

const SubWayNum = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const [isError] = useState(false);

  const start = location.state ? location.state.start : null;
  const end = location.state ? location.state.end : null;

  const handleClickFindBtn = async () => {
    if (start && end && code) {
      // try {
      //   const response = await client.post("/subwayNum", {
      //     subway_num: code,
      //     start_station: start,
      //   });
      //   console.log("!!!", response);
      // } catch (err) {
      //   console.log(err);
      // }

      navigate("/subway-status", {
        state: {
          start: start,
          end: end,
          code,
        },
      });
    }
  };

  if (!start && !end) return <Home />;

  return (
    <PageLayout>
      <SubwayNumWrapper>
        <SubWayNumMsg $isError={isError}>
          {isError ? "앗! 유효하지 않은 차량번호에요." : "탑승하셨나요?"}
        </SubWayNumMsg>
        <SubWayNumTitle>차량번호를 입력해주세요</SubWayNumTitle>
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
        <SubwayNumBtn onClick={handleClickFindBtn}>빈자리 찾기</SubwayNumBtn>
      </SubwayNumWrapper>
    </PageLayout>
  );
};

export default SubWayNum;

const SubwayNumWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubWayNumMsg = styled.p<{ $isError: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: 0.9rem;

  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.red_darkest : theme.colors.primary_dark};

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
`;

const SubWayNumTitle = styled.h1`
  margin-top: 1.6rem;
  margin-bottom: 2rem;

  color: black;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;

const SubwayNumBtn = styled.button`
  display: flex;
  width: 32.7rem;
  height: 4.8rem;
  padding: 1.6rem 0;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;

  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_base};
  color: white;

  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem; /* 100% */
`;
