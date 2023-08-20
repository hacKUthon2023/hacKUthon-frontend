import { styled } from "styled-components";
import { IcBacBtn } from "../assets/icon";

const SubWayNum = () => {
  return (
    <SubwayNumWrapper>
      <SubWayNumHeader>
        <IcBacBtn />
      </SubWayNumHeader>
      <SubWayNumContainer>
        <SubWayNumTitle>열차번호</SubWayNumTitle>
        <SubwayNumInput
          placeholder="열차 번호 입력하기"
          type="number"
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
        />
        <SubwayNumDetail>쏼라쏼라</SubwayNumDetail>
        <SubwayNumBtn>내 열차 찾기</SubwayNumBtn>
      </SubWayNumContainer>
    </SubwayNumWrapper>
  );
};

export default SubWayNum;

const SubwayNumWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubWayNumHeader = styled.header`
  display: flex;
`;

const SubWayNumContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubWayNumTitle = styled.h1``;

const SubwayNumInput = styled.input`
  /* number type input 화살표 없애기 */
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SubwayNumDetail = styled.p``;

const SubwayNumBtn = styled.button``;
