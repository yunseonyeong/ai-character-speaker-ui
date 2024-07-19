import LayoutDefault from "@common/layout/LayoutDefault";
import "@styles/globals.css";
import { NextPage } from 'next';
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => <LayoutDefault>{page}</LayoutDefault>);

  return(
    <>
      {getLayout(
        <Component {...pageProps}/>
       )}
    </>
  ) 
}
