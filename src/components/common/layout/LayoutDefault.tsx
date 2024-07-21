import { Noto_Sans_KR } from '@next/font/google';
import { ReactElement } from 'react';

import styled from 'styled-components';

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "400", "500", "700", "900"],
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--noto-sans_KR-bold",
  fallback: ["system-ui"],
});

const LayoutDefault = ({ children }: { children: ReactElement; }) => {
  return (
    <PageContainer className={`${notoSansKr.className}`}>
      <DesktopContainer />
      <MobileContainer>
        {children}
      </MobileContainer>
    </PageContainer>
  );
};

export default LayoutDefault;
const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFF4B6;
    height: 100vh;
    max-height: 100vh;
    gap: 80px;
`;

const MobileContainer = styled.div`
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
    max-width: 428px !important;
    padding: 0px 30px;
    position: relative;
`;

const DesktopContainer = styled.div`
  @media (max-width: 1028px) {
    display: none;
  }
  @media (min-width: 1028px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 428px;
  }
`;