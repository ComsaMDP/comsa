import { Subtitle, Title } from "../Text";
import { Button } from "../Button";
import { CertificateCard } from "./CertificateCard";
import { Logo } from "./Logo";
import { Divider } from "../Divider";
import { Stack } from "../Stack";
import { Background } from "../Background";
import { ServicesRow } from "./ServicesRow";
import heroBackground from "../../assets/hero_background.png";

export const Hero = () => {
  return (
    <div className="relative h-screen max-h-[1080px]  w-full">
      <Background src={heroBackground} alt="control de plagas" />
      <Content />
    </div>
  );
};

const Content = () => {
  return (
    <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-start gap-10 px-4 pt-32 md:items-start md:justify-center md:gap-16 md:pt-16 lg:px-8">
      <CertificateCard />
      <Logo />
      <Divider />
      <div className="flex flex-col items-center gap-8 md:items-start">
        <Title className="text-center text-white">
          Líderes en control de plagas
        </Title>
        <ServicesRow />
      </div>
      <div className="flex flex-col flex-wrap items-center gap-6 md:flex-row">
        <Subtitle className="text-center font-light text-white md:text-left md:font-semibold">
          Solicite su presupuesto sin cargo
        </Subtitle>
        <Button variant="primary">¡Contactanos!</Button>
      </div>
    </div>
  );
};
