import { styled } from "styled-components";

const SubWayRoute = () => {
  return (
    <SubWayRouteWrapper>
      <RouteInfoBox>출발역</RouteInfoBox>
      <RouteInfoBox>환승역</RouteInfoBox>
      <RouteInfoBox>도착역</RouteInfoBox>
    </SubWayRouteWrapper>
  );
};

export default SubWayRoute;

const SubWayRouteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const RouteInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 9rem;
  height: 5rem;

  border-radius: 3rem;
`;
