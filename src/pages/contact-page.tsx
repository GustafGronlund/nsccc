import { ContactInput, RoundedButton } from '../components';
import { aboutPageMarqueeImages, contactInputData } from '../utils/data';
import { useScrollReveal } from '../hooks';
import { Bounce, ToastContainer, toast } from 'react-toastify';

type ContactPageProps = {
  isFooterVisible?: boolean;
};

export const ContactPage = ({ isFooterVisible = false }: ContactPageProps) => {
  const ScrollReveal = useScrollReveal;
  const notify = () => toast.success('Din besked er modtaget. Tak!');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', '55dfa299-f0a9-427b-9b14-b7de5e4b7692');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      notify();
      form.reset();
    }
  };

  return (
    <>
      <main className="relative mt-30 mb-30 lg:mb-0 lg:min-h-screen">
        <header className="px-6">
          <ScrollReveal delay={0} initialY={0} duration={1} forceAnimate={true}>
            <h1 className="cursor-default font-sans text-6xl leading-tight font-medium tracking-tighter text-[#383838] lg:text-9xl">
              Kontakt
            </h1>
          </ScrollReveal>
          <ScrollReveal
            delay={0.2}
            initialY={0}
            duration={1}
            forceAnimate={true}
          >
            <p className="mb-10 cursor-default text-left font-sans text-xl leading-tight font-light tracking-tighter text-[#383838] lg:mb-10 lg:text-2xl">
              Har du et spørgsmål, så skriv det endelig til os.
            </p>
          </ScrollReveal>
        </header>
        <div className="flex w-full flex-col lg:flex-row">
          <ScrollReveal
            delay={0.4}
            initialY={0}
            duration={1}
            className="w-full"
            forceAnimate={true}
          >
            <form
              className="flex w-full flex-col gap-6 px-6 lg:w-2/3 lg:pr-80"
              method="post"
              onSubmit={onSubmit}
            >
              {contactInputData.map((input) => (
                <div key={input.type + input.name}>
                  <label htmlFor={input.name} className="sr-only">
                    {input.placeholder}
                  </label>
                  <ContactInput
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    lowercase={input.lowercase}
                  />
                </div>
              ))}
              <div className="relative flex text-[#78A25D]">
                <div className="w-full border-b-2 border-[#29ABE2]">
                  <label htmlFor="message" className="sr-only">
                    Din besked
                  </label>
                  <textarea
                    name="message"
                    cols={50}
                    rows={5}
                    placeholder="Din besked (skal udfyldes)"
                    className="w-full resize-none border-none bg-transparent py-3 pr-3 text-[#282828] placeholder-[#B0B0B0] transition outline-none focus:placeholder-transparent focus:ring-0"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full">
                <RoundedButton text="Send" type="submit" primaryButton={true} />
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition={Bounce}
                />
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.6} initialY={0} duration={1}>
            <img
              src={aboutPageMarqueeImages[7]}
              alt="Nordic Scenic Car Club Copenhagen"
              className={`hidden lg:block lg:h-auto lg:w-1/3 lg:object-cover ${
                isFooterVisible ? 'lg:absolute' : 'lg:fixed'
              } lg:right-6 lg:bottom-6`}
            />
          </ScrollReveal>
        </div>
      </main>
    </>
  );
};
