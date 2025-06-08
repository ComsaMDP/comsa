import { SectionContainer } from "../SectionContainer";
import { Divider } from "../Divider";
import { Item } from "../Item";
import { Paragraph, Subtitle, Title } from "../Text";

import aboutUs1 from "../../assets/about_us_1.png";
import aboutUs2 from "../../assets/about_us_2.png";
import aboutUs3 from "../../assets/about_us_3.png";
import Image from "next/image";
import { Button } from "../Button";
import { useNav } from "../../hooks/useNav";

export const AboutUs = () => {
  const { goToContact } = useNav();

  return (
    <SectionContainer id="about-us">
      <Title>¿Quiénes somos?</Title>
      <Divider />
      <div className="flex flex-wrap gap-4">
        <Item>
          María Gisela Arrigo <div className="h-full w-px bg-gray-300" />
          Ingeniera Ambiental
        </Item>
        <Item>
          Raúl Arrigo <div className="h-full w-px bg-gray-300" /> Ingeniero
          Agrónomo
        </Item>
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph>
          Nuestra empresa cuenta con 54 años de experiencia en el tema,
          comprobables, mediante los certificados emitidos por las autoridades
          competentes. Además, garantizamos el resultado de los trabajos y la
          satisfacción del cliente. Esto es posible por la calidad de los
          productos utilizados, su variedad, la moderna maquinaria de aplicación
          y ser una empresa fundada por el Ingeniero Agrónomo Raúl Agustín
          Arrigo con 52 años de especialización en el tema comprobables,
          mediante los certificados emitidos por las autoridades competentes ya
          que en 1974 tenía experiencia suficiente como para dictar cursos de
          capacitación sobre el tema “Control de Plagas” a médicos, enfermeros,
          docentes, etc.
        </Paragraph>
        <Paragraph>
          Por otro lado, la Ingeniera Ambiental, también especializada en Manejo
          Integrado de Plagas, analiza cada trabajo para poder brindar el
          servicio más sustentable posible, primando como estrategia principal
          el trabajo en conjunto con el cliente en la exclusión, limpieza, etc.,
          y a la hora de utilizar productos químicos, que estos sean amigables
          con el medio ambiente.
        </Paragraph>
      </div>
      <div className="flex gap-4">
        <Image src={aboutUs1} alt="Comsa Equipo" />
        <Image src={aboutUs2} alt="María Gisela Arrigo, Raúl Arrigo" />
        <Image src={aboutUs3} alt="María Gisela Arrigo, Raúl Arrigo" />
      </div>
      <Subtitle>¿Por qué elegirnos?</Subtitle>
      <div className="flex flex-col gap-4">
        <Paragraph>
          COMSA es la empresa de Manejo Integrado de Plagas con más experiencia
          del Partido de General Pueyrredon. Dirigida por profesionales
          especializados en la materia, nuestro personal cuenta con muchos años
          de experiencia y realiza capacitaciones de forma constante. Además,
          contamos con maquinaria de última generación.
        </Paragraph>
        <Paragraph>
          Nuestra empresa está habilitada y autorizada por la provincia de
          Buenos Aires y por el Municipio de General Pueyrredon y emite
          certificados por cada trabajo realizado, lo que permite dar
          cumplimiento a las disposiciones legales vigentes en la materia.
        </Paragraph>
        <Paragraph>
          Los productos que utilizamos están certificados por ANMAT
          (Administración Nacional de Medicamentos, Alimentos y Tecnología
          Médica) y SENASA (Servicio Nacional de Sanidad y Calidad
          Agroalimentaria).
        </Paragraph>
        <Paragraph>
          Adaptamos nuestros servicios a sus necesidades, realizando una
          evaluación pormenorizada del problema para lograr la solución más
          apropiada, priorizando la no utilización de productos químicos y, en
          caso de hacerlo, nuestros productos no dañan al medio ambiente.
        </Paragraph>
        <Paragraph>
          Nuestros servicios no son estándar, ni tenemos una receta única ante
          el mismo problema sino que nos adaptamos a cada lugar y sus
          circunstancias, por eso le damos tanta importancia a la visita previa
          para el diseño del Plan de Manejo Integral de Plagas.
        </Paragraph>
        <Button
          variant="primary"
          className="mt-4 justify-center md:self-start"
          onClick={goToContact}
        >
          ¡Solicite su Presupuesto Sin Cargo!
        </Button>
      </div>
    </SectionContainer>
  );
};
