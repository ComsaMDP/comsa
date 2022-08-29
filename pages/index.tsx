import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Home from "../components/Home";
import { ServicesProvider } from "../hooks/useServices";

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Comsa</title>
        <meta
          name="description"
          content="Companía Marplatense de Saneamiento. Control de pestes: Desratización, desinsectación y desinfección."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RRYZJZ0E7G"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-RRYZJZ0E7G');
        `}
      </Script>
      <ServicesProvider>
        <Home />
      </ServicesProvider>
    </div>
  );
};

export default App;
