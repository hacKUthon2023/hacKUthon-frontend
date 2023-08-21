import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";

import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";

import GetImg from "../../src/assets/img/GetImg.png";

const SeatGet = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const transfer = location.state ? location.state.transfer : null;
  const isTransfer = location.state ? location.state.isTransfer : null;
  const start = location.state ? location.state.start : null;
  const end = location.state ? location.state.end : null;
  const transfered = location.state ? location.state.transfered : null;

  // console.log(start, end, transfered, "@@@@@@");

  if ((!start && !transfered) || !end) return <Home />;

  return (
    <PageLayout>
      <SeatGetWrapper>
        <IconBox>
          <img src={GetImg} alt="정보-보상-이미지" />
        </IconBox>
        {isTransfer && (
          <TransferBtn
            onClick={() =>
              navigate("/subway-num", {
                state: {
                  start: isTransfer ? transfer : start,
                  end: end,
                  transfered: true,
                },
              })
            }
          >
            환승하기
          </TransferBtn>
        )}
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
  margin-top: 14.1rem;
  margin-bottom: 10rem;

  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_base};
  color: #fff;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;
