import { styled } from "styled-components";

const Home = () => {
  return (
    <>
      <TestBg>
        HacKuthon2023-frontend
        <TestTitle>메인 홈 경로입니다</TestTitle>
      </TestBg>
      ;
    </>
  );
};

export default Home;

const TestBg = styled.div`
  background-color: pink;
  width: 100%;
  height: 100%;
`;

const TestTitle = styled.h1`
  color: blue;
`;
