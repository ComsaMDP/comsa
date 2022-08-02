import type { NextPage } from "next";
import Head from "next/head";
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
      <ServicesProvider>
        <Home />
      </ServicesProvider>
    </div>
  );
};

export default App;
