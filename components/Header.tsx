import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import logo from "../assets/logo_small.png";
import { Button } from "../components/Button";
import { NavLink } from "../components/NavLink";
import { MobileNavLink } from "./MobileNavLink";

export const Header = () => {
  const [showingMobileNav, setShowingMobileNav] = useState(false);
  const [showingLogo, setShowingLogo] = useState(false);

  const showMobileNav = () => setShowingMobileNav(true);

  const hideMobileNav = () => setShowingMobileNav(false);

  const desktopNav = (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-8">
        <li>
          <NavLink>Quienes somos</NavLink>
        </li>
        <li>
          <NavLink>Servicios</NavLink>
        </li>
        <li>
          <Button variant="dark">¡Contáctanos!</Button>
        </li>
      </ul>
    </nav>
  );

  const mobileNav = (
    <nav
      className={clsx(
        "fixed inset-0 z-50 flex flex-col bg-black bg-opacity-70 transition-all md:hidden",
        showingMobileNav
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <ul
        className={clsx(
          "flex flex-col bg-gray-100 transition-all duration-500",
          showingMobileNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-40 opacity-0"
        )}
      >
        <MobileNavLink onClick={hideMobileNav}>Quienes somos</MobileNavLink>
        <div className="h-px w-full bg-slate-300" />
        <MobileNavLink onClick={hideMobileNav}>Servicios</MobileNavLink>
        <div className="h-px w-full bg-slate-300" />
        <MobileNavLink onClick={hideMobileNav} className="text-xl text-primary">
          ¡Contáctanos!
        </MobileNavLink>
      </ul>
      <div className="w-full flex-1 cursor-pointer" onClick={hideMobileNav} />
    </nav>
  );

  useEffect(() => {
    const onScroll = () => setShowingLogo(window.scrollY > 500);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {mobileNav}
      <header className="fixed z-40 h-16 w-full bg-gray-100 shadow-md">
        <div className="container mx-auto flex h-full w-full items-center justify-between bg-gray-100 px-4 lg:px-8">
          <div className="relative">
            <Image
              src={logo}
              alt="comsa-logo"
              height={37}
              width={(37 * 95) / 45}
              style={{
                transitionDuration: "500ms",
                transitionProperty: "opacity",
                opacity: showingLogo ? 100 : 0,
                transitionDelay: showingLogo ? "200ms" : "none",
              }}
            />
            <h1
              className={clsx(
                "absolute top-2 left-0 text-lg font-bold text-primary transition-opacity duration-500",
                showingLogo ? "opacity-0" : "opacity-100 delay-200"
              )}
            >
              COMSA
            </h1>
          </div>
          {desktopNav}
          <div className="flex h-full w-8 items-center justify-center md:hidden">
            <FiMenu
              size={24}
              className="cursor-pointer"
              onClick={showMobileNav}
            />
          </div>
        </div>
      </header>
    </>
  );
};
