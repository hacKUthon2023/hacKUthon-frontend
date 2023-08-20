import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcRouteArrow } from "../assets/icon";

const SubWayRoute = () => {
  return (
    <PageLayout>
      <SubWayRouteWrapper>
        <RouteInfoBoxContainer>
          <ThirdInfoBox>경복궁</ThirdInfoBox>
          <IcRouteArrow />
          <TransferInfoBox>을지로3가</TransferInfoBox>
          <IcRouteArrow />
          <TwoLineInfoBox>문래</TwoLineInfoBox>
        </RouteInfoBoxContainer>
        <SubWayRouteBtn>차량번호 입력하기</SubWayRouteBtn>
      </SubWayRouteWrapper>
    </PageLayout>
  );
};

export default SubWayRoute;

const SubWayRouteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: #202325;
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
