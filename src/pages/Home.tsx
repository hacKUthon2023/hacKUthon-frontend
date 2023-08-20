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
        <SearchBtn>시작하기</SearchBtn>
      </HomeWrapper>
    </PageLayout>
  );
};

export default Home;

const HomeWrapper = styled.section`
  margin-top: 10rem; //임시
  display: flex;
  flex-direction: column;
  align-items: center;
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
