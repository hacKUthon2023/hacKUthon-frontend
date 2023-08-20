import { styled } from "styled-components";
import { IcBacBtn, IcMainLogo } from "../../assets/icon";
import { useNavigate } from "react-router-dom";

interface CommonHeaderProps {
  isHome?: boolean;
}

const CommonHeader = ({ isHome = false }: CommonHeaderProps) => {
  const navigate = useNavigate();
  return (
    <CommonHeaderWrapper>
      {isHome ? (
        <EmptyDiv></EmptyDiv>
      ) : (
        <IcBacBtn onClick={() => navigate(-1)} />
      )}
      <IcMainLogo />
      <EmptyDiv></EmptyDiv>
    </CommonHeaderWrapper>
  );
};

export default CommonHeader;

const CommonHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  background-color: #fff;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary_base};
`;

const EmptyDiv = styled.div`
  width: 3.2rem;
`;
