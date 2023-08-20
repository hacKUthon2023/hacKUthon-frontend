import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcEmptySeat } from "../assets/icon";

const SubWayStatus = () => {
  const START = "을지로 3가";
  const END = "문래";

  return (
    <PageLayout>
      <SubWayStatusWrapper>
        <StatusInfoContainer>
          <InfoMsg>곧 생기게 될 빈자리를 보여드리게요.</InfoMsg>
          <InfoRoute>{`${START}>${END}`}</InfoRoute>
          <InfoNumBox>
            <InfoNumCircle>1</InfoNumCircle>
            <InfoNumCircle>1</InfoNumCircle>
            <InfoNumCircle>1</InfoNumCircle>
            <InfoNumCircle>1</InfoNumCircle>
          </InfoNumBox>
        </StatusInfoContainer>

        <CongestionContainer>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((id) => {
            return <CongestionBox>{id}</CongestionBox>;
          })}
        </CongestionContainer>

        <StatusContainer>
          <StatusSection>
            {Array.from({ length: 6 }, (_, index) => index + 1).map((id) => {
              return <IcEmptySeat id={id.toString()} />;
            })}
            <SectionNum>1</SectionNum>
            <SectionNum>1</SectionNum>
          </StatusSection>
          <StatusSection>
            {Array.from({ length: 14 }, (_, index) => index + 1).map((id) => {
              return <IcEmptySeat id={id.toString()} />;
            })}
            <SectionNum>2</SectionNum>
            <SectionNum>2</SectionNum>
          </StatusSection>
          <StatusSection>
            {Array.from({ length: 14 }, (_, index) => index + 1).map((id) => {
              return <IcEmptySeat id={id.toString()} />;
            })}
            <SectionNum>3</SectionNum>
            <SectionNum>3</SectionNum>
          </StatusSection>
          <StatusSection>
            {Array.from({ length: 14 }, (_, index) => index + 1).map((id) => {
              return <IcEmptySeat id={id.toString()} />;
            })}
            <SectionNum>4</SectionNum>
            <SectionNum>4</SectionNum>
          </StatusSection>
          <StatusSection>
            {Array.from({ length: 6 }, (_, index) => index + 1).map((id) => {
              return <IcEmptySeat id={id.toString()} />;
            })}
          </StatusSection>
        </StatusContainer>
      </SubWayStatusWrapper>
    </PageLayout>
  );
};

export default SubWayStatus;

const SubWayStatusWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const InfoMsg = styled.p`
  text-align: center;

  margin-top: 0.9rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.colors.primary_dark};
`;

const InfoRoute = styled.h1`
  text-align: center;
  margin-top: 1.7rem;
  margin-bottom: 0.8rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.colors.ink_darkest};
`;

const InfoNumBox = styled.div`
  display: flex;
  padding: 1.2rem 0;
  gap: 1.6rem;
`;

const InfoNumCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.6rem;

  border-radius: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.sky_light};
`;

const CongestionContainer = styled.article`
  display: flex;
  gap: 0.2rem;
  padding: 1.2rem 0;
`;

const CongestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 2rem;

  background-color: black;
  color: #fff;

  border-radius: 0.4rem;
`;

// const GreenCongestion = styled(CongestionBox)`
//   background-color: ${({ theme }) => theme.colors.green_base};
// `;

// const YellowCongestion = styled(CongestionBox)`
//   background-color: ${({ theme }) => theme.colors.yellow_base};
// `;

// const RedCongestion = styled(CongestionBox)`
//   background-color: ${({ theme }) => theme.colors.red_darkest};
// `;

const StatusContainer = styled.article`
  display: flex;
  flex-direction: column;

  padding: 1.2rem 3.078rem;

  background-color: ${({ theme }) => theme.colors.sky_light};

  border-radius: 2.4rem;
`;

const StatusSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 9.6rem;
  grid-row-gap: 0.4rem;
`;

const SectionNum = styled.p`
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
  height: 3.2rem;
`;
