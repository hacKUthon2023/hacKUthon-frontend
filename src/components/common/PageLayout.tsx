import { styled } from "styled-components";
import CommonHeader from "./CommonHeader";
import React from "react";

interface PageLayoutProps {
  isHome?: boolean;
  children: React.ReactNode;
}

const PageLayout = ({ isHome, children }: PageLayoutProps) => {
  return (
    <PageLayoutWrapper>
      <CommonHeader isHome={isHome} />
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
