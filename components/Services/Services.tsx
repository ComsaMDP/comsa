import Image from "next/image";
import { BaseProps } from "../../app/types";
import { Container } from "../Container";
import { Divider } from "../Divider";
import { Item } from "../Item";
import { Paragraph, Subtitle, Title } from "../Text";
import services from "../../assets/services.png";
import { ServiceSelector } from "./ServiceSelector";

export const Services = () => {
  return (
    <Container id={"services"}>
      <Title>Servicios</Title>
      <Divider />
      <Subtitle>Manejo integrado de plagas</Subtitle>
      <div className="flex flex-wrap gap-4">
        <Item>Ratas / Ratones</Item>
        <Item>Murciélagos</Item>
        <Item>Palomas</Item>
        <Item>Moscas</Item>
        <Item>Mosquitos</Item>
        <Item>Garrapatas</Item>
        <Item>Pulgas</Item>
        <Item>Cucarachas</Item>
        <Item>Chinches</Item>
        <Item>Hormigas</Item>
        <Item>Arañas</Item>
        <Item>Polillas</Item>
        <Item>Tijeretas</Item>
      </div>
      <Paragraph>
        Desde COMSA realizamos un Manejo Integrado de Plagas:
      </Paragraph>
      <div className="flex flex-wrap gap-16">
        <div className="hidden lg:block">
          <Image
            src={services}
            alt="servicios"
            width={250}
            height={250}
            objectFit="contain"
            objectPosition="top"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <ul className="flex min-w-[200px] list-disc flex-col gap-3 pl-6">
            <ListItem>
              Minimizando el uso de agroquímicos y volcándonos a tareas
              preventivas como son: la exclusión, sellado de grietas,
              saneamiento, inspecciones, etc
            </ListItem>
            <ListItem>Efectuamos control químico y control no químico</ListItem>
            <ListItem>
              Realizamos seguimiento y monitoreo (con la correspondiente entrega
              de informes periódicos) asesoramiento integral, entre otras.
            </ListItem>
            <ListItem>Entregamos Manuales MIP adaptados a cada firma</ListItem>
          </ul>
        </div>
      </div>
      <ServiceSelector />
    </Container>
  );
};

export const ListItem = ({ children }: BaseProps) => {
  return (
    <li className="text-primary">
      <span className="text-black">{children}</span>
    </li>
  );
};
