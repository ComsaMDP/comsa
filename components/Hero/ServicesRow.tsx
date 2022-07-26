import Image from "next/image";
import { Button } from "../Button";

import cockroach from "../../assets/cockroach_orange.png";
import rat from "../../assets/rat_orange.png";
import virus from "../../assets/virus_orange.png";

export const ServicesRow = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Image src={rat} alt="rat" height={24} width={24} />
        <span className="hidden md:inline">Desratización</span>
      </Button>
      <Button>
        <Image src={cockroach} alt="insect" height={24} width={24} />
        <span className="hidden md:inline">Desinsectación</span>
      </Button>
      <Button>
        <Image src={virus} alt="virus" height={24} width={24} />
        <span className="hidden md:inline">Desinfección</span>
      </Button>
      <Button>Ver más...</Button>
    </div>
  );
};
