import { styled } from "styled-components";
import PageLayout from "../components/common/PageLayout";
import { IcEmptySeat } from "../assets/icon";
import { useLocation, useNavigate } from "react-router-dom";
// import Home from "./Home";
// import SubWayNum from "./SubWayNum";
import { useEffect, useRef, useState } from "react";
import client from "../lib/axios";
import { subwayNumResponseType } from "../type/dataType";
import SubWayNum from "./SubWayNum";
// import Home from "./Home";

interface SEAT_DATAType {
  end_station: string;
  seat_num: number;
}

const SubWayStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const seatRef = useRef<HTMLDivElement>(null);

  const [fetchdata, setFetchData] = useState<subwayNumResponseType>();
  // const [SEAT_DATA, setSEAT_DATA] = useState<Array<SEAT_DATAType>>([]);
  const [seatNum, setSeatNum] = useState<Array<number>>();
  const [seatEnd, setSeatEnd] = useState<Array<string>>();
  const [isSeated, setIsSeated] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("");

  const start = location.state ? location.state.start : null;
  const end = location.state ? location.state.end : null;
  const code = location.state ? location.state.code : null;
  const isTransfer = location.state ? location.state.isTransfer : null;
  const transfer = location.state ? location.state.transfer : null;
  const transfered = location.state ? location.state.transfered : null;
  // console.log("!!!", data);
  // console.log(SEAT_DATA?.map((seat) => seat.seat_num));
  // console.log(SEAT_DATA);
  // console.log(seatNum, seatEnd);
  // console.log(start, transfer, end);

  console.log(start, "###");

  useEffect(() => {
    // alert("자리에 앉으셨다면, 앉은 위치를 표시해주세요. 큰 도움이 될 거예요!");

    const fetchData = async () => {
      try {
        const { data } = await client.post("/subwayNum", {
          subway_num: Number(code),
          start_station: start,
        });

        setFetchData(data);
        setSeatNum(data.seats.map((seat: SEAT_DATAType) => seat.seat_num));
        setSeatEnd(data.seats.map((seat: SEAT_DATAType) => seat.end_station));
      } catch (err) {
        // navigate("/error");
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   //버튼 하나씩만 누를 수 있도록
  //   if (!seatRef.current) return;
  //   seatRef.current.forEach((ref) => {
  //     if (ref.id === activeBtn) {
  //       ref.classList.add("isClicked");
  //     } else {
  //       ref.classList.remove("isClicked");
  //     }
  //   });
  // }, [activeBtn]);

  const range = (start: number, end: number) => {
    const array = [];
    for (let i = start; i <= end; ++i) {
      array.push(i);
    }
    return array;
  };

  const handleClickSeat = (
    e: React.MouseEvent<HTMLDivElement | SVGSVGElement>
  ) => {
    const target = e.target as HTMLDivElement | SVGSVGElement;
    if (!target) return;

    setIsSeated(true);
    setSelectedSeat(target.id);

    target.classList.toggle("isClicked");
  };

  // const renderSeats = (id: number) => {
  //   return SEAT_DATA === Array(0) ? (
  //     SEAT_DATA.map((seat) => {
  //       <EmptySeat
  //         key={id}
  //         onClick={handleClickSeat}
  //         ref={seatRef}
  //         id={id.toString()}
  //       >
  //         {seat.end_station}
  //       </EmptySeat>;
  //     })
  //   ) : (
  //     <IconBox key={id} onClick={handleClickSeat} id={id.toString()}>
  //       <IcEmptySeat />
  //     </IconBox>
  //   );
  // let seatNode = <></>;

  // return <IcEmptySeat />;
  // if (!SEAT_DATA) return;
  // SEAT_DATA.forEach((seat) => {
  //   seat.seat_num === id
  //     ? (seatNode = (
  //         <EmptySeat
  //           key={id}
  //           onClick={handleClickSeat}
  //           ref={seatRef}
  //           id={id.toString()}
  //         >
  //           {seat.end_station}
  //         </EmptySeat>
  //       ))
  //     : (seatNode = (
  //         <IconBox key={id} onClick={handleClickSeat} id={id.toString()}>
  //           <IcEmptySeat />
  //         </IconBox>
  //       ));
  // });
  // return seatNode;

  // };

  const handleClickHereBtn = async () => {
    try {
      const { data } = await client.post("/add", {
        subway_num: Number(code),
        start_station: start,
        seat_num: Number(selectedSeat),
        end_station: end,
      });
      console.log(data);
    } catch (err) {
      // navigate("/error");
      console.log(err);
    }

    isSeated &&
      navigate("/seat-get", {
        state: {
          isTransfer: isTransfer,
          start: start,
          end: end,
          transfered: transfered,
          transfer: transfer,
        },
      });
  };

  // if (!start || !end || !isTransfer || !transfer) return <Home />;
  if (!code) return <SubWayNum />;

  return (
    fetchdata && (
      <PageLayout isRefresh={true}>
        <SubWayStatusWrapper>
          <StatusInfoContainer>
            <InfoMsg>
              {fetchdata?.subway_exists
                ? "곧 빈자리가 될 수 있는 좌석을 확인해보세요."
                : "이 차량의 좌석 정보가 아직 등록되지 않았어요."}
              .
            </InfoMsg>
            <InfoRoute>{`${start} > ${end}`}</InfoRoute>
            <InfoNumBox>
              {Array.from({ length: 4 }, (_, index) => index + 1).map((id) => {
                return <InfoNumCircle key={id}>{code[id - 1]}</InfoNumCircle>;
              })}
            </InfoNumBox>
          </StatusInfoContainer>

          <StatusContainer>
            <StatusSection>
              {range(1, 6).map((id) => {
                return seatNum?.find((seatNum) => seatNum === id) ? (
                  <EmptySeat
                    key={id}
                    onClick={handleClickSeat}
                    ref={seatRef}
                    id={id.toString()}
                  >
                    {seatEnd?.shift()}
                  </EmptySeat>
                ) : (
                  <IconBox
                    key={id}
                    onClick={handleClickSeat}
                    id={id.toString()}
                  >
                    <IcEmptySeat />
                  </IconBox>
                );
              })}
              <SectionNum>1</SectionNum>
              <SectionNum>1</SectionNum>
            </StatusSection>
            <StatusSection>
              {range(7, 20).map((id) => {
                return seatNum?.find((seatNum) => seatNum === id) ? (
                  <EmptySeat
                    key={id}
                    onClick={handleClickSeat}
                    ref={seatRef}
                    id={id.toString()}
                  >
                    {seatEnd?.shift()}
                  </EmptySeat>
                ) : (
                  <IconBox
                    key={id}
                    onClick={handleClickSeat}
                    id={id.toString()}
                  >
                    <IcEmptySeat />
                  </IconBox>
                );
              })}
              <SectionNum>2</SectionNum>
              <SectionNum>2</SectionNum>
            </StatusSection>
            <StatusSection>
              {range(21, 34).map((id) => {
                return seatNum?.find((seatNum) => seatNum === id) ? (
                  <EmptySeat
                    key={id}
                    onClick={handleClickSeat}
                    ref={seatRef}
                    id={id.toString()}
                  >
                    {seatEnd?.shift()}
                  </EmptySeat>
                ) : (
                  <IconBox
                    key={id}
                    onClick={handleClickSeat}
                    id={id.toString()}
                  >
                    <IcEmptySeat />
                  </IconBox>
                );
              })}
              <SectionNum>3</SectionNum>
              <SectionNum>3</SectionNum>
            </StatusSection>
            <StatusSection>
              {range(35, 48).map((id) => {
                return seatNum?.find((seatNum) => seatNum === id) ? (
                  <EmptySeat
                    key={id}
                    onClick={handleClickSeat}
                    ref={seatRef}
                    id={id.toString()}
                  >
                    {seatEnd?.shift()}
                  </EmptySeat>
                ) : (
                  <IconBox
                    key={id}
                    onClick={handleClickSeat}
                    id={id.toString()}
                  >
                    <IcEmptySeat />
                  </IconBox>
                );
              })}
              <SectionNum>4</SectionNum>
              <SectionNum>4</SectionNum>
            </StatusSection>
            <StatusSection>
              {range(49, 54).map((id) => {
                return seatNum?.find((seatNum) => seatNum === id) ? (
                  <EmptySeat
                    key={id}
                    onClick={handleClickSeat}
                    ref={seatRef}
                    id={id.toString()}
                  >
                    {seatEnd?.shift()}
                  </EmptySeat>
                ) : (
                  <IconBox
                    key={id}
                    onClick={handleClickSeat}
                    id={id.toString()}
                  >
                    <IcEmptySeat />
                  </IconBox>
                );
              })}
            </StatusSection>
          </StatusContainer>
          {isSeated && (
            <HereSeatBtn onClick={handleClickHereBtn}>
              여기 앉을게요
            </HereSeatBtn>
          )}
        </SubWayStatusWrapper>
      </PageLayout>
    )
  );
};

export default SubWayStatus;

const SubWayStatusWrapper = styled.section`
  padding-top: 9.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6.8rem;
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

  color: #72777a;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
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
  margin-bottom: 1.8rem;

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

  & svg.isClicked {
    border: 0.2rem solid #090a0a;
  }
`;

const SectionNum = styled.p`
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
  height: 3.2rem;
`;

const EmptySeat = styled.div`
  display: flex;
  height: 3.2rem;
  width: 8.472rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_base};
  color: white;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;

  box-sizing: border-box;

  border-radius: 4.8rem;
  &.isClicked {
    border: 0.2rem solid #090a0a;
    box-sizing: border-box;
    color: white;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6rem;
  }
`;

const IconBox = styled.div`
  & svg {
    pointer-events: none;
  }
  &.isClicked {
    border: 0.2rem solid #090a0a;
    border-radius: 4.4rem;
    padding: 0;
    height: fit-content;
    width: fit-content;
  }
`;

const HereSeatBtn = styled.button`
  display: flex;
  width: 32.7rem;
  height: 4.8rem;
  margin-top: 1.2rem;
  margin-bottom: 2.8rem;

  justify-content: center;
  align-items: center;

  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.colors.primary_base};
  color: #fff;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;
