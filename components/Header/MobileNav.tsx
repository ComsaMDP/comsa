import clsx from "clsx";
import { useEffect } from "react";
import { useNav } from "../../hooks/useNav";
import { MobileNavLink } from "./MobileNavLink";

interface Props {
  isOpen: boolean;
  close: () => any;
}

export const MobileNav = ({ isOpen, close }: Props) => {
  const { goToAboutUs, goToContact, goToServices } = useNav();

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const getOnNavLink = (callback: () => any) => {
    return () => {
      close();
      callback();
    };
  };

  return (
    <nav
      className={clsx(
        "fixed inset-0 z-50 flex flex-col bg-black bg-opacity-70 transition-all md:hidden",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <ul
        className={clsx(
          "flex flex-col bg-gray-100 transition-all duration-500",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"
        )}
      >
        <MobileNavLink onClick={getOnNavLink(goToAboutUs)}>
          Quiénes somos
        </MobileNavLink>
        <div className="h-px w-full bg-slate-300" />
        <MobileNavLink onClick={getOnNavLink(goToServices)}>
          Servicios
        </MobileNavLink>
        <div className="h-px w-full bg-slate-300" />
        <MobileNavLink
          onClick={getOnNavLink(goToContact)}
          className="text-xl text-primary"
        >
          ¡Contactanos!
        </MobileNavLink>
      </ul>
      <div className="w-full flex-1 cursor-pointer" onClick={close} />
    </nav>
  );
};
