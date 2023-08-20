import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcHomeMainIcon } from "../assets/icon";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../lib/axios";

const Home = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const navigate = useNavigate();

  console.log(start, end);

  const handleChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };

  const handleChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(e.target.value);
  };

  const handleClickStartBtn = async () => {
    if (start && end) {
      try {
        // const response = await client.post("/onboarding", {
        //   start_station: start,
        //   end_station: end,
        const response = await client.get("/");
        console.log("!!!", response);
      } catch (err) {
        console.log(err);
      }

      navigate("/subway-route", {
        state: {
          start: start,
          end: end,
        },
      });
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
          />
          <StationInput
            placeholder="도착역 입력하기"
            onChange={handleChangeEnd}
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
