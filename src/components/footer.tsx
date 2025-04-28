import { Link } from 'react-router-dom';
import { RoundedButton } from './rounded-button';
import { useEffect, useRef } from 'react';

type FooterProps = {
  onToggleVisibility?: (isVisible: boolean) => void;
};

export const Footer = ({ onToggleVisibility }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current || !onToggleVisibility) return;

    const observer = new IntersectionObserver(
      ([entry]) => onToggleVisibility(entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [onToggleVisibility]);

  return (
    <footer
      ref={footerRef}
      className="relative h-[600px]"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div className="fixed bottom-0 flex h-[600px] w-full flex-col items-center justify-center bg-[#29ABE2] lg:p-3">
        <article className="flex w-full flex-col items-center justify-center">
          <h1 className="font-sans text-2xl leading-tight font-medium tracking-tighter text-[#f9f8f2] lg:text-8xl">
            NORTH SEA CLASSIC CAR CLUB
          </h1>
          <p className="mb-10 text-center font-sans text-xl leading-tight font-light tracking-tighter text-[#f9f8f2] lg:mb-10 lg:text-2xl">
            Et løb for alle klassiske biler og veterankøretøjer siden 2014
          </p>
          <RoundedButton text="Kontakt" link="/contact" primaryButton={false} />
          <article className="w-3/4 lg:w-1/2">
            <div className="my-2 h-px w-full bg-white opacity-30 lg:mb-3"></div>
            <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
              <p className="cursor-default font-sans text-xs leading-tight font-light tracking-tighter text-[#f9f8f2] lg:text-base">
                © 2025 North Sea Classic Car Club
              </p>
              <Link
                to="https://www.facebook.com/North.Sea.Classic"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs leading-tight font-light tracking-tighter text-[#f9f8f2] lg:text-base"
              >
                Facebook
              </Link>
              <Link
                to="https://www.gronlund.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs leading-tight font-light tracking-tighter text-[#f9f8f2] lg:text-base"
              >
                Development by Gustaf Grönlund
              </Link>
            </div>
          </article>
        </article>
      </div>
    </footer>
  );
};
