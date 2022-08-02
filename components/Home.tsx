import Head from "next/head";
import { Header } from "./Header/Header";
import { Main } from "./Main";
import { Hero } from "./Hero/Hero";
import { AboutUs } from "./AboutUs/AboutUs";
import { Services } from "./Services/Services";
import { Divider } from "./Divider";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>COMSA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Manejo integrado de plagas en General Pueyrredón. Control de plagas Mar del Plata"
        ></meta>
      </Head>
      <Header />
      <div className="flex flex-col">
        <Main>
          <Hero />
          <AboutUs />
          <Divider variant="secondary" className="container mx-auto" />
          <Services />
          <Contact />
        </Main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
