import {
  ParallaxImage,
  MarqueeImages,
  ScrollDownIndicator,
} from '../components/';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks';
import { aboutPageMarqueeImages } from '../utils/data';
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
      <ScrollReveal delay={0} initialY={0} duration={1}>
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
        <article className="mt:20 w-full p-10 lg:mt-40 lg:w-1/2 lg:pr-40">
          <ScrollReveal delay={0.2} initialY={30} duration={1.5}>
            <label className="font-sans text-xs font-semibold text-[#383838]">
              Om NSCCC
            </label>
          </ScrollReveal>
          <ScrollReveal delay={0.2} initialY={30} duration={1.5}>
            <p className="mb-10 cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
              North Sea Classic (NSC) er en dag for personer, som holder af
              klassiske biler og veterankøretøjer, hvor det at sparke dæk og
              hygge sig med de andre løbsdeltagere er sat i højsædet. For at
              bevare hyggen og muligheden for at nå rundt og tale med de andre
              løbsdeltagere og publikum er der sat en begrænsning på maksimum 60
              køretøjer, og i alt deltager ca. 140 i løbet.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} initialY={30} duration={1.5}>
            <p className="mb-10 cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
              NSC er uden begrænsning af bilmærker og nationaliteter af
              køretøjerne, hvilket giver en anderledes mulighed for at møde
              andre deltagere med samme passion. Det er intentionen, at NSC
              holdes på et plan, hvor alle med et af ovennævnte køretøjer kan
              være med, uden at det koster en formue. Tilmelding foregår online
              d. 1. maj. kl. 18.00 efter først til mølle-princippet. Da der
              erfaringsmæssigt er flere køretøjer end pladser, bliver der lavet
              en venteliste ved evt. afbud.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} initialY={30} duration={1.5}>
            <p className="mb-10 cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
              Løbsgebyret indeholder morgenmad, middagsmad, aftensmad samt div.
              drikkevarer. Dagen starter og slutter ved Medborgerhuset, hvor man
              bl.a. får udleveret rutekort og løbsskilte. Turen har mange gange
              gået rundt om Ringkøbing Fjord, men ruten kan også henlægges til
              andre lokationer i landsdelen. Turens længde er typisk mellem 110
              og 150 km., og undervejs holdes der et antal pauser, hvor vi bl.a.
              besøger virksomheder eller attraktioner. Af faste stop kan nævnes
              gågaden i Ringkøbing, men hvert år tilstræber vi at finde nye
              udflugtsmål og overraskende indslag.
            </p>
          </ScrollReveal>
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
              NSC er en "non profit organisation".
            </p>
          </ScrollReveal>
        </section>
      </section>
      <ScrollDownIndicator />
    </>
  );
};
