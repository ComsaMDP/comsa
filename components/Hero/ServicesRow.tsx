import { Button } from "../Button";

import cockroach from "../../assets/cockroach_orange.png";
import rat from "../../assets/rat_orange.png";
import virus from "../../assets/virus_orange.png";
import { Icon } from "../Icon";

export const ServicesRow = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Icon src={rat} alt="rat" />
        <span className="hidden md:inline">Desratización</span>
      </Button>
      <Button>
        <Icon src={cockroach} alt="insect" />
        <span className="hidden md:inline">Desinsectación</span>
      </Button>
      <Button>
        <Icon src={virus} alt="virus" />
        <span className="hidden md:inline">Desinfección</span>
      </Button>
      <Button>Ver más...</Button>
    </div>
  );
};
