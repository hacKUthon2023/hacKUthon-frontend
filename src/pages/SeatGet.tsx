import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcSeatGet } from "../assets/icon";
import { useNavigate } from "react-router-dom";

const SeatGet = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <SeatGetWrapper>
        <IconBox>
          <IcSeatGet />
        </IconBox>
        <TransferBtn onClick={() => navigate("/seat-num")}>
          환승하기
        </TransferBtn>
        <BackHomeBtn onClick={() => navigate("/")}>처음으로</BackHomeBtn>
      </SeatGetWrapper>
    </PageLayout>
  );
};

export default SeatGet;

const SeatGetWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBox = styled.div`
  padding: 1.2rem 0;
`;

const TransferBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32.7rem;
  height: 4.8rem;
  margin-bottom: 1.2rem;

  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_base};
  color: #fff;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;

const BackHomeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32.7rem;
  height: 4.8rem;

  color: ${({ theme }) => theme.colors.primary_base};

  border: 0.1rem solid ${({ theme }) => theme.colors.primary_base};
  border-radius: 4.8rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;
