import { styled } from "styled-components";
import { IcMainLogo } from "../../assets/icon";

const CommonHeader = () => {
  return (
    <CommonHeaderWrapper>
      <IcMainLogo />
    </CommonHeaderWrapper>
  );
};

export default CommonHeader;

const CommonHeaderWrapper = styled.header``;
