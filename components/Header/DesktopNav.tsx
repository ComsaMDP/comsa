import { useEffect, useState } from "react";
import { useNav } from "../../hooks/useNav";
import { Button } from "../Button";
import { NavLink } from "./NavLink";

export const DesktopNav = () => {
  const { goToAboutUs, goToContact, goToServices } = useNav();

  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-8">
        <li onClick={goToAboutUs}>
          <NavLink>Quienes somos</NavLink>
        </li>
        <li onClick={goToServices}>
          <NavLink>Servicios</NavLink>
        </li>
        <li onClick={goToContact}>
          <Button variant="dark">¡Contáctanos!</Button>
        </li>
      </ul>
    </nav>
  );
};
