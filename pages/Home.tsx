import Head from "next/head";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Hero } from "../components/Hero/Hero";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Services } from "../components/Services/Services";
import { Divider } from "../components/Divider";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Comsa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main>
        <Hero />
        <AboutUs />
        <Divider variant="secondary" className="container mx-auto" />
        <Services />
      </Main>
      <div className="container mx-auto h-64" />
    </>
  );
};
