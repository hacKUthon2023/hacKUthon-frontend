import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";

const Home = () => {
  return (
    <PageLayout isHome={true}>
      <HomeWrapper>
        <InputContainer>
          <StationInput placeholder="출발역 입력하기" />
          <StationInput placeholder="도착역 입력하기" />
        </InputContainer>
        <SearchBtn>빈자리 찾기</SearchBtn>
      </HomeWrapper>
    </PageLayout>
  );
};

export default Home;

const HomeWrapper = styled.section`
  margin-top: 10rem; //임시
  display: flex;
  flex-direction: column;
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

  color: ${({ theme }) => theme.colors.primary_gray};

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;

  border-radius: 2.4rem;
`;

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.7rem;
  height: 4.8rem;
  padding: 1.6rem 0;

  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_green};
`;
