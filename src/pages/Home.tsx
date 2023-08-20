import { styled } from "styled-components";
import { IcMainLogo } from "../assets/icon";

const Home = () => {
  return (
    <HomeWrapper>
      <IcMainLogo />
      <InputContainer>
        <StationInput placeholder="출발역 입력하기" />
        <StationInput placeholder="도착역 입력하기" />
      </InputContainer>
      <SearchBtn>빈자리 찾기</SearchBtn>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const StationInput = styled.input``;

const SearchBtn = styled.button``;
