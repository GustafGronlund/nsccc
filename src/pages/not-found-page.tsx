import { LOGO } from '../utils';
import { RoundedButton } from '../components';

export const NotFoundPage = () => {
  return (
    <>
      <main className="flex h-dvh w-dvw flex-col items-center justify-center gap-6 overflow-hidden pt-30 lg:h-screen lg:w-screen">
        <img
          className="h-auto w-60 lg:w-100"
          src={LOGO.NSCCC_LOGO}
          alt="NSCCC Logo"
        />
        <article className="flex flex-col items-center justify-center gap-3 px-10">
          <p className="cursor-default text-center font-sans text-2xl leading-tight font-light tracking-tighter text-[#383838] lg:text-4xl">
            Siden blev ikke fundet
          </p>
          <p className="cursor-default text-center font-sans text-lg leading-tight font-light tracking-tighter text-[#383838] lg:text-2xl">
            Beklager, men vi kunne ikke finde den side, du ledte efter. <br />{' '}
            Den kan være blevet flyttet, omdøbt eller også har den aldrig
            eksisteret.
          </p>
        </article>
        <RoundedButton text="Gå til forsiden" link="/" primaryButton />
      </main>
    </>
  );
};
