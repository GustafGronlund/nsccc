import Marquee from 'react-fast-marquee';
import { useScrollReveal } from '../hooks';
import { ParallaxImage } from '../components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IMAGES, SVG } from '../utils';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const ScrollReveal = useScrollReveal;
  const [imageRevealed, setImageRevealed] = useState<boolean>(false);
  const [curtainsFinished, setCurtainsFinished] = useState<boolean>(false);

  useEffect(() => {
    if (curtainsFinished) {
      const timer = setTimeout(() => {
        setImageRevealed(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [curtainsFinished]);

  return (
    <>
      <section className="relative mb-20 h-dvh w-dvw overflow-hidden lg:mb-30 lg:h-screen lg:w-screen">
        {/* Image container */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <div className="flex h-full w-full origin-center items-center justify-center">
            <motion.div
              className="flex items-center justify-center overflow-hidden"
              initial={{ height: '80%', width: '80%', scale: 1 }}
              animate={
                curtainsFinished && !imageRevealed
                  ? { scale: 1.05 }
                  : imageRevealed
                    ? { height: '100%', width: '100%', scale: 1 }
                    : {}
              }
              transition={{
                duration: imageRevealed ? 1 : 0.5,
                ease: 'easeOut',
              }}
            >
              <ParallaxImage
                src={IMAGES.HOME_PAGE.HERO}
                alt="Background"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Reveal animations */}
        <div className="absolute inset-0 z-10 flex overflow-hidden">
          {/* Left curtain */}
          <motion.div
            className="h-full w-1/2 bg-[#f9f8f2]"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Right curtain */}
          <motion.div
            className="h-full w-1/2 bg-[#f9f8f2]"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              onComplete: () => setCurtainsFinished(true),
            }}
          />
        </div>

        <ScrollReveal delay={3} duration={1} initialY={0} animateY={0}>
          <div className="absolute inset-0 z-10 overflow-hidden bg-black opacity-20" />
        </ScrollReveal>

        <ScrollReveal
          delay={2.5}
          duration={1}
          initialY={0}
          animateY={0}
          className="absolute inset-x-0 bottom-0 z-40"
        >
          <div className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-start justify-end pb-6 pl-6 lg:pb-12 lg:pl-12">
            <h1 className="font-base cursor-default text-4xl tracking-tight text-white lg:text-8xl">
              North Sea
            </h1>
            <h1 className="font-base cursor-defaultt cursor-default text-4xl tracking-tight text-white lg:text-8xl">
              Classic Car Club
            </h1>
          </div>
        </ScrollReveal>
      </section>

      <Marquee
        autoFill={true}
        speed={60}
        className="mb-20 h-fit overflow-hidden lg:mb-30"
      >
        <ScrollReveal delay={0.2} duration={1} initialY={0}>
          <h1 className="cursor-default font-sans text-4xl font-bold tracking-tighter text-[#29ABE2] lg:text-6xl">
            {' '}
            Et løb for alle klassiske biler og veterankøretøjer siden 2014
            {' — '}
          </h1>
        </ScrollReveal>
      </Marquee>

      <ScrollReveal delay={0.4} duration={1} initialY={0}>
        <div className="group relative flex h-[35vh] w-full items-center justify-center overflow-hidden lg:items-center lg:justify-start">
          <div className="z-20 flex h-full w-full flex-col-reverse items-center justify-between lg:flex-row">
            <div className="flex h-full w-full cursor-pointer flex-row justify-between rounded-tr-4xl rounded-br-4xl bg-[#F0EFEA] lg:w-9/12">
              <Link
                to="/registration"
                className="flex w-full flex-row items-center justify-center"
              >
                <button className="group z-20 flex w-2/3 cursor-pointer flex-row items-center justify-center gap-3 lg:gap-10">
                  <img
                    src={SVG.ARROW_RIGHT}
                    alt=""
                    className="h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 lg:ml-3 lg:h-15 lg:w-15"
                    style={{
                      filter:
                        'invert(57%) sepia(75%) saturate(1557%) hue-rotate(165deg) brightness(97%) contrast(101%)',
                    }}
                  />
                  <h1 className="font-ligh relative z-10 text-center text-lg text-[#29ABE2] lg:text-6xl">
                    Tilmelding
                  </h1>
                </button>
                <div className="h-full w-1/3 overflow-hidden rounded-tr-2xl rounded-br-2xl lg:rounded-tr-4xl lg:rounded-br-4xl">
                  <img
                    src={IMAGES.HOME_PAGE.TILMELDING}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-103"
                  />
                </div>
              </Link>

              <div className="h-full w-1/3 overflow-hidden rounded-2xl rounded-tr-2xl lg:hidden">
                <img
                  src={IMAGES.HOME_PAGE.TILMELDING_2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center bg-[#F0EFEA] py-10 lg:w-3/12 lg:rounded-4xl lg:p-0">
              <div className="flex h-full w-full flex-col items-center justify-center gap-10">
                <p className="cursor-default text-center font-sans text-2xl leading-tight font-light tracking-tighter text-[#29ABE2] lg:text-4xl">
                  Nedtælling til løbsstart
                </p>
                <p className="cursor-default text-center font-sans text-xl leading-tight font-light tracking-tighter text-[#29ABE2] lg:text-2xl">
                  45 dagar 16 timer 30 min 32 sek
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};
