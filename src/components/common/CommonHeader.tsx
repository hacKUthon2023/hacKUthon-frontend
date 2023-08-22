import { styled } from "styled-components";
import { IcBacBtn, IcMainLogo, IcRefresh } from "../../assets/icon";
import { useNavigate } from "react-router-dom";

interface CommonHeaderProps {
  isHome?: boolean;
  isRefresh?: boolean;
  isError?: boolean;
}

const CommonHeader = ({
  isHome = false,
  isRefresh = false,
  isError = false,
}: CommonHeaderProps) => {
  const navigate = useNavigate();
  return (
    <CommonHeaderWrapper>
      {isHome ? (
        <EmptyDiv></EmptyDiv>
      ) : (
        <IcBacBtn onClick={() => (isError ? navigate("/") : navigate(-1))} />
      )}
      <IcMainLogo onClick={() => navigate("/")} />
      {isRefresh ? (
        <IcRefresh onClick={() => window.location.reload()} />
      ) : (
        <EmptyDiv></EmptyDiv>
      )}
    </CommonHeaderWrapper>
  );
};

export default CommonHeader;

const CommonHeaderWrapper = styled.header`
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  width: 37.5rem;
  height: 9.6rem;

  background-color: #fff;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary_base};
`;

const EmptyDiv = styled.div`
  width: 3.2rem;
`;
