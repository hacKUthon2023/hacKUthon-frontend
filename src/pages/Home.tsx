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
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const StationInput = styled.input``;

const SearchBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary_green};
`;
