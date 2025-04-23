import header from '../assets/img/about-page/about-marquee-6.jpg';
import { Marquee, ParallaxImage } from '../components/';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks';
import { aboutPageMarqueeImages } from '../utils/data';

export const AboutPage = () => {
  const ScrollReveal = useScrollReveal;
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['end end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.001, 1], [0, 0, 700], {
    clamp: true,
  });

  return (
    <>
      <ScrollReveal delay={0} initialY={0} duration={1}>
        <section className="overflow-hidden">
          <ParallaxImage
            src={header}
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
              src={header}
              alt="Description"
              className="stickytop-[100px] left-10 hidden h-auto w-md object-cover lg:block"
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
            <p className="font-helvetica mb-10 text-2xl leading-tight font-light tracking-tighter text-[#383838]">
              North Sea Classic (NSC) er en dag for personer, som holder af
              klassiske biler og veterankøretøjer, hvor det at sparke dæk og
              hygge sig med de andre løbsdeltagere er sat i højsædet. For at
              bevare hyggen og muligheden for at nå rundt og tale med de andre
              løbsdeltagere og publikum er der sat en begrænsning på maksimum 60
              køretøjer, og i alt deltager ca. 140 i løbet.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} initialY={30} duration={1.5}>
            <p className="mb-10 font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
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
            <p className="mb-10 font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
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
      <section className="mt-40 flex w-full bg-red-500" />
      <section className="0">
        <div className="flex h-full w-full items-center justify-center text-white">
          <ScrollReveal delay={0.2} initialY={20} duration={1}>
            <Marquee images={aboutPageMarqueeImages} />
          </ScrollReveal>
        </div>
      </section>
      <section className="flex h-[20rem] w-full flex-row">
        <section className="hidden h-full w-1/2 justify-center pr-40 lg:flex" />
        <section className="flex h-full w-full items-center p-10 lg:w-1/2">
          <ScrollReveal delay={0.2} initialY={0} duration={1.5}>
            <p className="font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838]">
              NSC er en "non profit organisation".
            </p>
          </ScrollReveal>
        </section>
      </section>
    </>
  );
};
