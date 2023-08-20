import { styled } from "styled-components";
import CommonHeader from "./CommonHeader";
import React from "react";

interface PageLayoutProps {
  isHome?: boolean;
  isRefresh?: boolean;
  isError?: boolean;
  children: React.ReactNode;
}

const PageLayout = ({
  isHome,
  isRefresh,
  isError,
  children,
}: PageLayoutProps) => {
  return (
    <PageLayoutWrapper>
      <CommonHeader isHome={isHome} isRefresh={isRefresh} isError={isError} />
      {children}
    </PageLayoutWrapper>
  );
};

export default PageLayout;

const PageLayoutWrapper = styled.div`
  display: felx;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
