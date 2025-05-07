import {
  ParallaxImage,
  MarqueeImages,
  ScrollDownIndicator,
} from '../components/';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks';
import { aboutPageMarqueeImages, ABOUT_PAGE_TEXTS } from '../utils/data';
import { IMAGES } from '../utils/assets';

export const AboutPage = () => {
  const ScrollReveal = useScrollReveal;
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollImages = useMemo(() => {
    return [
      aboutPageMarqueeImages[4],
      aboutPageMarqueeImages[3],
      aboutPageMarqueeImages[5],
      aboutPageMarqueeImages[8],
    ];
  }, []);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['end end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.001, 1], [0, 0, 700], {
    clamp: true,
  });

  useEffect(() => {
    const updateImageIndex = () => {
      const rawProgress = scrollYProgress.get();
      const imageCount = scrollImages.length;
      const newIndex = Math.min(
        Math.floor(rawProgress * imageCount),
        imageCount - 1
      );

      if (newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex);
      }
    };

    const subscription = scrollYProgress.on('change', updateImageIndex);

    updateImageIndex();

    return () => subscription();
  }, [scrollYProgress, scrollImages, currentImageIndex]);

  return (
    <>
      <ScrollReveal delay={0} initialY={0} duration={1} forceAnimate={true}>
        <section className="overflow-hidden">
          <ParallaxImage
            src={IMAGES.ABOUT_PAGE.HERO}
            alt="About page header image"
            className="h-screen w-full object-cover"
          />
        </section>
      </ScrollReveal>
      <section className="flex min-h-screen w-full">
        <div
          className="relative hidden w-1/2 pt-10 pl-10 lg:block"
          ref={containerRef}
        >
          <ScrollReveal delay={0.2} initialY={0} duration={1}>
            <motion.img
              ref={imageRef}
              src={scrollImages[currentImageIndex]}
              alt={`About image ${currentImageIndex + 1}`}
              className="sticky top-[100px] left-10 hidden h-auto w-md object-cover lg:block"
              style={{ y }}
              transition={{
                y: {
                  type: 'tween',
                  ease: 'linear',
                  duration: 0,
                },
              }}
            />
          </ScrollReveal>
        </div>
        <article className="mt-10 w-full px-3 lg:mt-40 lg:w-1/2 lg:pr-40">
          <ScrollReveal
            delay={0.2}
            initialY={30}
            duration={1.5}
            className="mb-1"
          >
            <label className="font-sans text-xs font-semibold text-[#383838]">
              Om NSCCC - North Sea Classic Car Club - "Fællesskab på fire hjul"
            </label>
          </ScrollReveal>
          {ABOUT_PAGE_TEXTS.map((textBlock, index) => (
            <ScrollReveal key={index} delay={0.2} initialY={30} duration={1.5}>
              <p className="mb-10 cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
                {textBlock.boldText && (
                  <span className="font-semibold">{textBlock.boldText}</span>
                )}{' '}
                {textBlock.text}
              </p>
            </ScrollReveal>
          ))}
        </article>
      </section>
      <section className="flex w-full bg-red-500 lg:mt-30" />
      <section className="0">
        <div className="flex h-full w-full items-center justify-center text-white">
          <ScrollReveal delay={0.2} initialY={20} duration={1}>
            <MarqueeImages
              images={aboutPageMarqueeImages}
              speed={60}
              direction="left"
            />
          </ScrollReveal>
        </div>
      </section>
      <section className="flex h-[15rem] w-full flex-row lg:h-[20rem]">
        <section className="hidden h-full w-1/2 justify-center pr-40 lg:flex" />
        <section className="flex h-full w-full items-center p-10 lg:w-1/2">
          <ScrollReveal delay={0.2} initialY={0} duration={1.5}>
            <p className="cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
              <span className="font-semibold">
                NSC-løbet er et non-profit arrangement
              </span>
              , hvor fællesskab, passion og bilglæde er i centrum.
            </p>
          </ScrollReveal>
        </section>
      </section>
      <ScrollDownIndicator />
    </>
  );
};
