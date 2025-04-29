import { Link } from 'react-router-dom';
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
      <div className="fixed bottom-0 flex h-[600px] w-full flex-col items-center justify-center bg-[#F7F6F2] lg:p-3">
        <article className="flex w-full flex-col items-center justify-center">
          <h1 className="mb-1 cursor-default font-sans text-2xl leading-tight font-medium tracking-tighter text-[#29ABE2] lg:mb-0 lg:text-8xl">
            North Sea Classic Car Club
          </h1>
          <p className="mb-0 w-1/2 cursor-default text-center font-sans text-base leading-tight font-light tracking-tighter text-[#383838] lg:mb-10 lg:w-full lg:text-2xl">
            Et løb for alle klassiske biler og veterankøretøjer siden 2014
          </p>
          <article className="w-3/4 lg:w-1/2">
            <div className="my-6 h-px w-full bg-[#29ABE2] opacity-30 lg:my-0 lg:mb-3"></div>
            <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
              <p className="cursor-default font-sans text-xs leading-tight font-light tracking-tighter text-[#383838] lg:text-base">
                © 2025 North Sea Classic Car Club
              </p>
              <Link
                to="https://www.facebook.com/North.Sea.Classic"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs leading-tight font-light tracking-tighter text-[#383838] lg:text-base"
              >
                Facebook
              </Link>
              <Link
                to="https://www.gronlund.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 font-sans text-xs leading-tight font-light tracking-tighter text-[#383838] lg:static lg:text-base"
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
