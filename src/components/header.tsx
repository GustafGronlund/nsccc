import logo from '../assets/img/nsc-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { map } from 'ramda';
import { NAV_ITEMS } from '../utils/const';

export type NavLink = {
  path: string;
  label: string;
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) return setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full px-10 py-5 lg:px-40 lg:py-5">
        <nav className="flex flex-row items-center justify-between">
          <img
            className="relative z-10 h-auto w-20 lg:w-30"
            src={logo}
            alt="logo"
          />
          <ul
            className={`flex flex-col space-y-10 lg:flex-row lg:space-x-30 ${
              isMobileMenuOpen
                ? 'absolute top-0 left-0 flex h-full w-full justify-center bg-[#F6F6F4]'
                : 'hidden lg:flex'
            } `}
          >
            {map(
              (navLink: NavLink) => (
                <li className="text-center" key={navLink.path}>
                  <Link
                    className="font-sans"
                    to={navLink.path}
                    onClick={handleNavLinkClick}
                  >
                    {navLink.label}
                  </Link>
                </li>
              ),
              NAV_ITEMS
            )}
          </ul>
          <button
            onClick={handleMobileMenuClick}
            className="flex cursor-pointer flex-col items-center justify-center lg:hidden"
            aria-label="mobile menu"
          >
            <span
              className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`my-1 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'w-0 opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
                isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            ></span>
          </button>
        </nav>
      </header>
    </>
  );
};
