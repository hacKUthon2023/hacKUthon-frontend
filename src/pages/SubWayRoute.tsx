import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcCongestion, IcRouteArrow } from "../assets/icon";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";

const SubWayRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const start = location.state ? location.state.start : null;
  const end = location.state ? location.state.end : null;
  const data = location.state ? location.state.data : null;

  const handleClickNextBtn = () => {
    if (start && end) {
      navigate("/subway-num", {
        state: {
          start: start,
          end: end,
          isTransfer: data.transfer,
          transfer: data.transfer_station,
        },
      });
    }
  };

  if (!start || !end || !data) return <Home />;
  return (
    <>
      <PageLayout>
        <SubWayRouteWrapper>
          <RouteInfoBoxContainer>
            <RouteMsg>출발역의 혼잡도 정보를 함께 알려드릴게요.</RouteMsg>
            <IcCongestion />
            {data.start_line === 2 ? (
              <TwoLineInfoBox>{start}</TwoLineInfoBox>
            ) : (
              <ThirdInfoBox>{start}</ThirdInfoBox>
            )}
            <IcRouteArrow />
            <TransferInfoBox>
              {data.transfer_station ? data.transfer_station : "환승없음"}
            </TransferInfoBox>
            <IcRouteArrow />
            {data.end_line === 2 ? (
              <TwoLineInfoBox>{end}</TwoLineInfoBox>
            ) : (
              <ThirdInfoBox>{end}</ThirdInfoBox>
            )}
          </RouteInfoBoxContainer>
          <SubWayRouteBtn onClick={handleClickNextBtn}>
            차량번호 입력하기
          </SubWayRouteBtn>
        </SubWayRouteWrapper>
      </PageLayout>
    </>
  );
};

export default SubWayRoute;

const SubWayRouteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RouteMsg = styled.p`
  color: ${({ theme }) => theme.colors.primary_base};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  padding: 0.9rem;
`;

const RouteInfoBoxContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin: 1.2rem 0;
`;

const RouteInfoBox = styled.div`
  width: fit-content;
  padding: 0.8rem 1.6rem;

  color: #fff;

  border-radius: 4.8rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;

const TwoLineInfoBox = styled(RouteInfoBox)`
  background-color: #60b257;
`;

const ThirdInfoBox = styled(RouteInfoBox)`
  background-color: #ee7b30;
`;

const TransferInfoBox = styled(RouteInfoBox)`
  background-color: ${({ theme }) => theme.colors.sky_dark};
`;

const SubWayRouteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.7rem;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_base};

  border-radius: 4.8rem;

  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;
