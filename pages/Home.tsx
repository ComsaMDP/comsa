import Head from "next/head";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Hero } from "../components/Hero/Hero";

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
      </Main>
      <div className="container mx-auto h-64 bg-red-500" />
    </>
  );
};
