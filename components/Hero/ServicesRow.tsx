import { Button } from "../Button";

import cockroach from "../../assets/cockroach_orange.png";
import rat from "../../assets/rat_orange.png";
import virus from "../../assets/virus_orange.png";
import { Icon } from "../Icon";
import { useNav } from "../../hooks/useNav";

export const ServicesRow = () => {
  const { goToServices, goToServicesDetails } = useNav();

  return (
    <div className="hidden flex-wrap gap-4 md:flex">
      <Button onClick={() => goToServicesDetails("desratizacion")}>
        <Icon src={rat} alt="rat" />
        <span className="hidden md:inline">Desratización</span>
      </Button>
      <Button onClick={() => goToServicesDetails("desinsectacion")}>
        <Icon src={cockroach} alt="insect" />
        <span className="hidden md:inline">Desinsectación</span>
      </Button>
      <Button onClick={() => goToServicesDetails("desinfeccion")}>
        <Icon src={virus} alt="virus" />
        <span className="hidden md:inline">Desinfección</span>
      </Button>
      <Button onClick={goToServices}>Ver más...</Button>
    </div>
  );
};
