import { Container } from "../Container";
import { Divider } from "../Divider";
import { Item } from "../Item";
import { Paragraph, Subtitle, Title } from "../Text";

import aboutUs1 from "../../assets/about_us_1.png";
import aboutUs2 from "../../assets/about_us_2.png";
import aboutUs3 from "../../assets/about_us_3.png";
import Image from "next/image";
import { Button } from "../Button";

export const AboutUs = () => {
  return (
    <Container>
      <Title>¿Quienes somos?</Title>
      <Divider />
      <div className="flex flex-wrap gap-4">
        <Item>
          Raúl Arrigo <div className="h-full w-px bg-gray-300" /> Ingeniero
          Agrónomo
        </Item>
        <Item>
          María Gisela Arrigo <div className="h-full w-px bg-gray-300" />
          Ingeniera Ambiental
        </Item>
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph>
          Desde 1972 somos la empresa líder en Manejo Integrado de Plagas (MIP)
          en casas de familia, comercios e industrias, y hemos desarrollado
          métodos y programas de trabajo que nos permiten asegurar un máximo de
          efectividad en nuestras tareas. Analizamos cada situación y utilizamos
          los métodos y materias primas más adecuados para cada necesidad.
        </Paragraph>
        <Paragraph>
          Cada servicio es avalado por nuestro Ingeniero Agrónomo, Raúl Arrigo,
          especialista en insectos y roedores, y nuestra Ingeniera Ambiental,
          María Gisela Arrigo, a fin de alcanzar el control más eficiente de las
          plagas protegiendo el medio ambiente y la salud de las personas.
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
          especializados en la materia. Nuestro personal cuenta con muchos años
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
          Los productos que utilizamos están Certificados por ANMAT
          (Administración Nacional de Medicamentos, Alimentos y Tecnología
          Médica) y SENASA (Servicio Nacional de Sanidad y Calidad
          Agroalimentaria).
        </Paragraph>
        <Paragraph>
          Adaptamos nuestros servicios a sus necesidades, realizando una
          evaluación pormenorizada del problema para lograr una solución lo más
          apropiada, priorizando la no utilización de productos químicos, y en
          caso de hacerlo, nuestros productos no dañan al medio ambiente.
        </Paragraph>
        <Paragraph>
          Nuestros servicios no son estándar, ni tenemos una receta única ante
          el mismo problema, sino que nos adaptamos a cada lugar y sus
          circunstancias, por eso le damos tanta importancia a la visita previa
          para el diseño del Plan de Manejo Integral de Plagas.
        </Paragraph>
        <Button variant="primary" className="mt-4 justify-center md:self-start">
          ¡Solicite su presupuesto!
        </Button>
      </div>
    </Container>
  );
};
