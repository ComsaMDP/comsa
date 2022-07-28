import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import logo from "../../assets/logo_small.png";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export const Header = () => {
  const [showingMobileNav, setShowingMobileNav] = useState(false);
  const [showingLogo, setShowingLogo] = useState(false);

  const showMobileNav = () => setShowingMobileNav(true);

  const hideMobileNav = () => setShowingMobileNav(false);

  useEffect(() => {
    const onScroll = () => setShowingLogo(window.scrollY > 500);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MobileNav close={hideMobileNav} isOpen={showingMobileNav} />
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
          <DesktopNav />
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
