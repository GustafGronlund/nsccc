import { useState } from 'react';
import { ContactInput, ContactTextarea, RoundedButton } from '../components';
import { useScrollReveal } from '../hooks';
import { memberUserData } from '../utils/data';
import { notifyError, notifySuccess } from '../lib/notify';
import { VEDTAEGTER_PDF } from '../utils/const';

const BODY_TEXT =
  'cursor-default font-sans text-xl leading-tight font-light tracking-tighter text-[#383838] lg:text-2xl';
const LIST =
  'list-disc space-y-2 pl-5 font-sans text-xl font-light text-[#383838] marker:text-[#29ABE2]';
const PRICE = 'font-medium text-[#29ABE2]';

export const MemberRegistrationPage = () => {
  const ScrollReveal = useScrollReveal;
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPending) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setIsPending(true);

    try {
      const { saveMember } = await import('../lib/save-member');
      await saveMember(data);
      notifySuccess('Tak for din tilmelding!');
      form.reset();
    } catch (error) {
      console.error(error);
      notifyError(
        (error as { code?: string }).code === 'permission-denied'
          ? 'Denne e-mail er allerede tilmeldt.'
          : 'Noget gik galt. Prøv igen.'
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className="mt-30 mb-30 px-3 lg:min-h-screen">
      <ScrollReveal delay={0} initialY={0} duration={1} forceAnimate={true}>
        <header className="mb-10 lg:mb-16">
          <h1 className="cursor-default font-sans text-6xl leading-tight font-medium tracking-tighter text-[#383838] lg:text-9xl">
            Bliv medlem
          </h1>
          <p className={`${BODY_TEXT} mt-2`}>
            Bliv medlem af North Sea Classic Car Club ved at udfylde
            nedenstående formular.
          </p>
          <p className="mt-3 cursor-default font-sans text-base font-light tracking-tighter text-[#383838]/60">
            Felter markeret med * skal udfyldes.
          </p>
        </header>
      </ScrollReveal>

      <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
        <ScrollReveal
          delay={0.2}
          initialY={0}
          duration={1}
          className="w-full lg:w-1/2"
          forceAnimate={true}
        >
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 items-end gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {memberUserData.map((input) => {
              const isTextarea = input.type === 'textarea';

              return (
                <div
                  key={input.name}
                  className={isTextarea ? 'sm:col-span-2' : undefined}
                >
                  <label htmlFor={input.name} className="sr-only">
                    {input.placeholder}
                  </label>
                  {isTextarea ? (
                    <ContactTextarea
                      name={input.name}
                      placeholder={input.placeholder}
                      required={input.required}
                    />
                  ) : (
                    <ContactInput
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      lowercase={input.lowercase}
                      required={input.required}
                    />
                  )}
                </div>
              );
            })}
            <label className="mt-4 flex cursor-pointer items-center gap-3 font-sans text-base font-light tracking-tighter text-[#383838] sm:col-span-2 lg:text-xl">
              <input
                type="checkbox"
                required
                className="h-5 w-5 shrink-0 cursor-pointer accent-[#29ABE2]"
              />
              <span>
                Jeg accepterer{' '}
                <a
                  href={VEDTAEGTER_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#29ABE2] underline underline-offset-4"
                >
                  Vedtægterne
                </a>
              </span>
            </label>
            <div className="sm:col-span-2">
              <RoundedButton
                text="Tilmeld"
                type="submit"
                primaryButton={true}
              />
            </div>
          </form>
        </ScrollReveal>

        <ScrollReveal
          delay={0.4}
          initialY={0}
          duration={1}
          className="w-full lg:w-1/2"
        >
          <aside className="flex flex-col gap-6">
            <h2 className="cursor-default font-sans text-3xl leading-tight font-medium tracking-tighter text-[#383838]">
              Medlemskab
            </h2>

            <p className={BODY_TEXT}>
              Som medlem af klubben vil man som husstand kunne deltage i f.eks.:
            </p>
            <ul className={LIST}>
              <li>Netværk blandt medlemmer</li>
              <li>Events</li>
              <li>Køreaftaler</li>
              <li>Rabatter</li>
            </ul>

            <p className={BODY_TEXT}>
              Klubben tilsigter at afvikle min. 2 events om året af større
              karakter, og derudover min. 2 parade-aftener (sidst på
              eftermiddage) ved REMA1000 på omfartsvejen i Ringkøbing.
            </p>

            <hr className="border-[#29ABE2]/30" />

            <p className={BODY_TEXT}>
              Årligt kontingent <strong className={PRICE}>kr. 200,-</strong>{' '}
              gældende fra 1. januar til 31. december.
            </p>
          </aside>
        </ScrollReveal>
      </div>
    </main>
  );
};
