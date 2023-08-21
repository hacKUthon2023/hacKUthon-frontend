import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcHomeMainIcon } from "../assets/icon";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../lib/axios";
// import { onBoardingResponseType } from "../type/dataType";

const Home = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const navigate = useNavigate();

  const handleLimitSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //띄어쓰기 제한
    if (e.target instanceof HTMLInputElement) {
      e.target.value = e.target.value.replace(" ", "");
    }
  };

  const handleChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    //역 못붙이게
    if (e.target.value.charAt(e.target.value.length - 1) === "역") {
      e.target.value = e.target.value.replace("역", "");
    }

    setStart(e.target.value);
  };

  const handleChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.charAt(e.target.value.length - 1) === "역") {
      console.log("!!");
      e.target.value = e.target.value.replace("역", "");
    }

    setEnd(e.target.value);
  };

  const handleClickStartBtn = async () => {
    if (!start || !end) return;
    console.log(start, end);

    try {
      const { data } = await client.post("/onboarding", {
        start_station: start,
        end_station: end,
      });

      data === "존재하지않는역"
        ? navigate("/error")
        : // setData(data);
          navigate("/subway-route", {
            state: {
              start: start,
              end: end,
              data: data,
            },
          });
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <PageLayout isHome={true}>
      <HomeWrapper>
        <IconBox>
          <IcHomeMainIcon />
        </IconBox>
        <InputContainer>
          <StationInput
            placeholder="출발역 입력하기"
            onChange={handleChangeStart}
            onKeyUp={handleLimitSpace}
          />
          <StationInput
            placeholder="도착역 입력하기"
            onChange={handleChangeEnd}
            onKeyUp={handleLimitSpace}
          />
        </InputContainer>
        <SearchBtn onClick={handleClickStartBtn}>시작하기</SearchBtn>
      </HomeWrapper>
    </PageLayout>
  );
};

export default Home;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBox = styled.div`
  padding: 1.2rem 0;
`;

const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StationInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.7rem;
  height: 4.8rem;
  padding: 1.6rem;

  color: #72777a;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.sky_light};
  border-radius: 2.4rem;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.primary_base};
    /* border-radius: 2.4rem; */
  }
`;

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.7rem;
  height: 4.8rem;
  padding: 1.6rem 0;
  margin-top: 1.2rem;

  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_base};
  color: #fff;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;
