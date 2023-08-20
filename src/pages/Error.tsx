import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <PageLayout isError={true}>
      <ErrorPageWrapper>
        <ErrorDetail>요청하신 페이지를 찾을 수 없어요.</ErrorDetail>
        <ErrorTitle>
          2,3호선에서 조금씩 지원하는 호선을 넓혀나갈게요.
        </ErrorTitle>
        <BackHomeBtn onClick={() => navigate("/")}>처음으로</BackHomeBtn>
      </ErrorPageWrapper>
    </PageLayout>
  );
};

export default Error;

const ErrorPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18rem;
`;

const ErrorDetail = styled.p`
  margin: 0.9rem 0;

  color: ${({ theme }) => theme.colors.primary_dark};

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
`;

const ErrorTitle = styled.h1`
  margin: 0.8rem 0;

  color: #000;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;

const BackHomeBtn = styled.button`
  display: flex;
  width: 32.7rem;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;

  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary_base};

  border-radius: 4.8rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;
