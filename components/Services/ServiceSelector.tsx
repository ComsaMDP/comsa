import { Card } from "../Card";
import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { Radio } from "../Radio";
import { Paragraph } from "../Text";

import cockroach from "../../assets/cockroach_black.png";
import rat from "../../assets/rat_black.png";
import virus from "../../assets/virus_black.png";
import bat from "../../assets/bat_black.png";
import microscope from "../../assets/microscope_black.png";
import { useState } from "react";

type Service =
  | "desratizacion"
  | "desinsectacion"
  | "desinfeccion"
  | "control-de-murcielagos"
  | "desinfeccion-por-covid-19";

export const ServiceSelector = () => {
  const [serviceSelected, setServiceSelected] =
    useState<Service>("desratizacion");

  return (
    <Card>
      <div className="flex flex-wrap gap-4">
        <Radio
          selected={serviceSelected === "desratizacion"}
          onClick={() => setServiceSelected("desratizacion")}
        >
          <Icon src={rat} alt="rat" />
          Desratización
        </Radio>
        <Radio
          selected={serviceSelected === "desinsectacion"}
          onClick={() => setServiceSelected("desinsectacion")}
        >
          <Icon src={cockroach} alt="cockroach" />
          Desinsectación
        </Radio>
        <Radio
          selected={serviceSelected === "desinfeccion"}
          onClick={() => setServiceSelected("desinfeccion")}
        >
          <Icon src={microscope} alt="microscope" />
          Desinfección
        </Radio>
        <Radio
          selected={serviceSelected === "control-de-murcielagos"}
          onClick={() => setServiceSelected("control-de-murcielagos")}
        >
          <Icon src={bat} alt="bat" />
          Control de murciélagos
        </Radio>
        <Radio
          selected={serviceSelected === "desinfeccion-por-covid-19"}
          onClick={() => setServiceSelected("desinfeccion-por-covid-19")}
        >
          <Icon src={virus} alt="virus" />
          Desinfección por COVID-19
        </Radio>
      </div>
      <Divider variant="secondary" className="w-48" />
      <div className="flex gap-4">
        <div className="w-0.5 self-stretch rounded bg-primary" />
        <div className="flex flex-1 flex-col gap-4">
          <ServiceSelectorItem service={serviceSelected} />
        </div>
      </div>
    </Card>
  );
};

const ServiceSelectorItem = ({ service }: { service: string }) => {
  if (service === "desratizacion") {
    return (
      <>
        <Paragraph>
          Dar prioridad a exclusión y saneamiento del medio con la visita previa
        </Paragraph>
        <Paragraph>
          Si bien cada lugar y situación requieren de una forma particular de
          tratamiento, habitualmente, el resultado más efectivo se logra con una
          cuidadosa aplicación de cebos sólidos (fresco o secos) a base de
          diversos atrayentes combinados con drogas de acción anticoagulante,
          los cuales, una vez ingeridos, provocarán la muerte del roedor a los
          pocos días, evitando el efecto de desconfianza. Cada variedad de cebo
          es elegida de acuerdo al lugar donde se localiza el problema y a la
          apetencia de los roedores. Todos estos sistemas se complementan con
          trampas de pegamento y trampas de captura viva.
        </Paragraph>
      </>
    );
  } else if (service === "desinsectacion") {
    return (
      <>
        <Paragraph>
          Debido a la gran cantidad de especies de insectos que existen, nos
          hemos especializado en aquellos que tienen una real importancia
          sanitaria. Para ello, hemos seleccionado una gama de insecticidas que
          por separado o en mezclas perfectamente calculadas y formuladas
          permiten su control, aún cuando sean tan disímiles entre sí como los
          caminadores (cucarachas, vinchucas) saltadores (pulgas) o voladores
          (moscas, mosquitos).
        </Paragraph>
        <Paragraph>
          Las aplicaciones se realizan con pulverizadores manuales, a mochila
          y/o eléctricos.
        </Paragraph>
        <Paragraph>
          En grandes ambientes son utilizados equipos a motor, de alto
          rendimiento y gran poder de penetración y alcance. En casos
          especiales, realizamos la aplicación de estos insecticidas mediante el
          sistema de termofumigación.
        </Paragraph>
        <Paragraph>
          Lo destacable: estas tareas pueden hacerse sin provocar contaminación,
          manchas u olores desagradables.
        </Paragraph>
      </>
    );
  } else if (service === "desinfeccion") {
    return (
      <Paragraph>
        El tratamiento de desinfección está destinado a controlar hongos,
        bacterias y virus para lograr una disminución del contagio de
        enfermedades en plantas industriales, bancos, comercios, escuelas, etc.,
        mediante pulverizaciones con poderosos germicidas especialmente en
        baños, vestuarios, lugares de gran circulación de personas y lugares
        afectados.
      </Paragraph>
    );
  } else if (service === "control-de-murcielagos") {
    return (
      <>
        <Paragraph>
          Por los beneficios ecosistémicos que los muercielos ofrecen,
          procuramos su relocalización el lugares donde no sean molestos y sigan
          protegiéndonos contra insectos.
        </Paragraph>
        <Paragraph>
          Una vez expulsados los ejemplados se realiza un cerramiento en la
          aberturas a fin de impedir su reingreso.
        </Paragraph>
      </>
    );
  } else if (service === "desinfeccion-por-covid-19") {
    return (
      <>
        <Paragraph>
          En caso de que su propiedad o ambiente de trabajo se haya expuesto al
          COVID-19 lo desinfectamos con amonio cuaternario con un equipo de
          ultrabajo volumen, con lo que un departamento de dos o tres ambientes
          se puede hacer muy rápidamente y muy eficazmente. Lo cual es un
          procedimiento rápido, económico y muy fácil de hacer, con absoluta
          garantía de los resultados.
        </Paragraph>
        <Paragraph>
          Estos trabajos no hacen más que pedirlos y se pueden realizar en
          aproximadamente media hora el ambiente tiene que quedar 1 o 2 horas
          desocupado para que actue bien el producto y se puede usa sin ningún
          problema.
        </Paragraph>
        <Paragraph>
          Como estos trabajos se realizan con un equipo de ultra bajo volúmen es
          mínima la cantidad de líquido que se utiliza, eso envuelve todas las
          superficies y todos los materiales que haya en el lugar y quedan
          totalmente desinfectados sin necesidad de secado o de limpieza
          posterior.
        </Paragraph>
      </>
    );
  }
  return <></>;
};
