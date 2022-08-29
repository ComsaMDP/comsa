import { Subtitle, Title } from "../Text";
import { Button } from "../Button";
import { CertificateCard } from "./CertificateCard";
import { Logo } from "./Logo";
import { Divider } from "../Divider";
import { Stack } from "../Stack";
import { Background } from "../Background";
import { ServicesRow } from "./ServicesRow";
import heroBackground from "../../assets/hero_background.png";
import { useNav } from "../../hooks/useNav";

export const Hero = () => {
  return (
    <div className="relative h-screen max-h-[1080px] min-h-[740px]  w-full">
      <Background src={heroBackground} alt="control de plagas" priority />
      <Content />
    </div>
  );
};

const Content = () => {
  const { goToContact } = useNav();

  return (
    <section className="container relative z-10 mx-auto h-full gap-8 px-4 pt-32 lg:px-8">
      <div className="flex h-4/5 w-full flex-col items-center justify-between md:items-start md:justify-center">
        <CertificateCard />
        <div className="flex flex-1 flex-col items-center justify-center gap-12 pt-10 md:items-start">
          <Logo />
          <Divider />
          <div className="flex flex-col items-center gap-8 md:items-start">
            <Title className="text-center text-white">
              Líderes en Manejo Integrado de Plagas
            </Title>
            <ServicesRow />
          </div>
          <div className="flex flex-col flex-wrap items-center gap-6 md:flex-row">
            <Subtitle className="text-center font-light text-white md:text-left md:font-semibold">
              Solicite su presupuesto sin cargo
            </Subtitle>
            <Button variant="primary" onClick={goToContact}>
              ¡Contactanos!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
