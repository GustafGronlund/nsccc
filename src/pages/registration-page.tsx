import { IMAGES, TILMELDING_REQUIREMENTS } from '../utils';
import { ParallaxImage, RoundedButton } from '../components';
import { useScrollReveal } from '../hooks';

export const RegistrationPage = () => {
  const ScrollReveal = useScrollReveal;
  return (
    <>
      <ScrollReveal delay={0.2} initialY={10} duration={1}>
        <main className="flex h-[80dvh] w-full items-center justify-center lg:h-[90vh]">
          <h1 className="cursor-default font-sans text-6xl leading-tight font-medium tracking-tighter text-[#383838] lg:text-9xl">
            Tilmelding
          </h1>
        </main>
      </ScrollReveal>

      <ScrollReveal delay={0.4} initialY={0} duration={1}>
        <figure className="relative mb-20 h-[80vh] w-full overflow-hidden lg:mb-30">
          <ParallaxImage
            src={IMAGES.HOME_PAGE.HERO}
            alt="Hero image"
            className="h-full w-full object-cover"
          />
        </figure>
      </ScrollReveal>

      <ScrollReveal delay={0.2} initialY={0} duration={1}>
        <article className="flex w-full flex-col px-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="mb-10 w-full cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838] lg:w-1/2">
            Det vil være muligt at tilmelde sig løbet fra 1. maj kl. 18:00 her
            på siden.
          </p>
          <p className="mb-3 w-full cursor-default font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838] lg:w-1/2">
            Ved tilmelding skal du oplyse:
          </p>
        </article>

        <article className="mb-30 flex w-full flex-col px-10 lg:flex-row">
          <figure className="relative hidden h-[60vh] w-1/2 overflow-hidden lg:block">
            <ParallaxImage
              src={IMAGES.HOME_PAGE.HERO}
              alt="Hero image"
              className="h-full w-1/2 object-cover"
            />
          </figure>
          <div className="flex w-full flex-col justify-between lg:w-1/2">
            <div className="flex flex-col justify-between lg:flex-row">
              <ul className="mb-10 list-disc space-y-2 pl-5 font-sans text-xl font-light text-[#383838] lg:mb-0">
                {TILMELDING_REQUIREMENTS.map((requirement) => (
                  <li className="cursor-default" key={requirement}>
                    {requirement}
                  </li>
                ))}
              </ul>
              <p className="mb-10 w-full cursor-default text-center font-sans text-2xl leading-tight font-bold tracking-tighter text-[#383838] lg:w-1/2 lg:text-left">
                Der er bindende tilmelding og beløbet tilbagebetales ikke.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="mb-5 w-full cursor-default text-center font-sans text-xl leading-tight font-light tracking-tighter text-[#383838] lg:mb-3 lg:w-1/2 lg:text-left">
                Ved at klikke på tilmeldingsikonet vil du blive viderstillet til
                "NemTilmeld.dk", hvor tilmelding vil være muligt.
              </p>
              <div className="flex w-full items-center justify-center lg:justify-between">
                <RoundedButton
                  text="Tilmeld"
                  link="https://n-s-c.nemtilmeld.dk/13/"
                  primaryButton={true}
                />
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>
    </>
  );
};
