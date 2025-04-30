import { LOGO } from '../utils';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { NAV_ITEMS } from '../utils/const';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { LinkAnimation } from './link-animation';
import { useScrollReveal } from '../hooks';

export type NavLink = {
  path: string;
  label: string;
};

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isFirstVisit = !sessionStorage.getItem('isFirstVisit');

  const shouldAnimate = isHomePage && isFirstVisit;

  if (isHomePage && isFirstVisit) {
    sessionStorage.setItem('hasVisited', 'true');
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const ScrollReveal = useScrollReveal;

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ScrollReveal
      delay={shouldAnimate ? 2.5 : 0}
      initialY={shouldAnimate ? 0 : 0}
      duration={shouldAnimate ? 1 : 0}
      forceAnimate={true}
      className="fixed top-0 z-100"
    >
      <header className="fixed top-0 z-100 flex h-30 w-full items-center px-6 lg:px-10">
        <nav className="flex w-full flex-row items-center justify-between">
          <Link to="/">
            <img
              className="relative z-30 h-auto w-20 lg:w-20"
              src={LOGO.NSCCC_LOGO}
              alt="logo"
            />
          </Link>

          <ul className="hidden rounded-4xl bg-[#F7F6F2] px-10 py-5 lg:flex lg:flex-row lg:space-x-6">
            {NAV_ITEMS.map((navLink) => (
              <LinkAnimation
                key={navLink.path}
                title={navLink.label}
                href={navLink.path}
                activePath={location.pathname}
              />
            ))}
          </ul>

          <button
            onClick={handleMobileMenuClick}
            className="z-30 flex cursor-pointer flex-col items-center justify-center lg:hidden"
            aria-label="mobile menu"
          >
            <span
              className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? 'translate-y-1.5 rotate-45 bg-[#f9f8f2]'
                  : 'bg-[#29ABE2]'
              }`}
            ></span>
            <span
              className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'w-0 bg-[#f9f8f2] opacity-0' : 'bg-[#29ABE2]'
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? '-translate-y-1.5 -rotate-45 bg-[#f9f8f2]'
                  : 'bg-[#29ABE2]'
              }`}
            ></span>
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              transition={{
                ease: easeInOut,
                duration: 0.5,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 z-20 h-screen w-screen bg-[#29ABE2]"
            >
              <ul className="flex h-full w-full flex-col items-center justify-center gap-5">
                {NAV_ITEMS.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ease: easeInOut,
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                  >
                    <Link
                      to={link.path}
                      className="font-playfair-display text-2xl font-thin text-[#FEFBF7] transition duration-300 ease-in-out hover:opacity-60"
                      onClick={handleMobileMenuClick}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </ScrollReveal>
  );
};
