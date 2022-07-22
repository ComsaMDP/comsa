import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import logo from '../assets/logo_small.png';
import { Button } from '../components/Button';
import { NavLink } from '../components/NavLink';
import { MobileNavLink } from './MobileNavLink';

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
          <Button type="dark">¡Contáctanos!</Button>
        </li>
      </ul>
    </nav>
  );

  const mobileNav = (
    <nav
      className={clsx(
        'fixed inset-0 flex flex-col bg-black bg-opacity-70 md:hidden transition-all z-50',
        showingMobileNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <ul
        className={clsx(
          'bg-gray-100 flex flex-col transition-all duration-500',
          showingMobileNav ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-0'
        )}
      >
        <MobileNavLink onClick={hideMobileNav}>Quienes somos</MobileNavLink>
        <div className="h-px w-full bg-slate-300" />
        <MobileNavLink onClick={hideMobileNav}>Servicios</MobileNavLink>
        <div className="h-px w-full bg-slate-300" />
        <MobileNavLink onClick={hideMobileNav} className="text-primary text-xl">
          ¡Contáctanos!
        </MobileNavLink>
      </ul>
      <div className="flex-1 w-full cursor-pointer" onClick={hideMobileNav} />
    </nav>
  );

  useEffect(() => {
    const onScroll = () => setShowingLogo(window.scrollY > 500);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {mobileNav}
      <header className="fixed w-full h-16 shadow-md bg-gray-100 z-40">
        <div className="m-auto w-full max-w-7xl h-full bg-gray-100 px-4 md:px-8 flex items-center justify-between">
          <div className="relative">
            <Image
              src={logo}
              alt="comsa-logo"
              height={37}
              width={(37 * 95) / 45}
              style={{
                transitionDuration: '500ms',
                transitionProperty: 'opacity',
                opacity: showingLogo ? 100 : 0,
                transitionDelay: showingLogo ? '200ms' : 'none',
              }}
            />
            <span
              className={clsx(
                'absolute top-2 left-0 font-bold text-lg transition-opacity text-primary duration-500',
                showingLogo ? 'opacity-0' : 'opacity-100 delay-200'
              )}
            >
              COMSA
            </span>
          </div>
          {desktopNav}
          <div className="h-full w-8 flex items-center justify-center md:hidden">
            <FiMenu size={24} className="cursor-pointer" onClick={showMobileNav} />
          </div>
        </div>
      </header>
    </>
  );
};
