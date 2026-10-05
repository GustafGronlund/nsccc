import { useState } from 'react';
import { signIn } from '../lib/admin';
import { ContactInput } from './contact-input';
import { RoundedButton } from './rounded-button';

export const AdminLogin = () => {
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    try {
      await signIn(String(email), String(password));
    } catch {
      setHasError(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex max-w-md flex-col gap-6">
      <ContactInput
        name="email"
        type="email"
        placeholder="E-mail *"
        lowercase={true}
        required={true}
      />
      <ContactInput
        name="password"
        type="password"
        placeholder="Adgangskode *"
        lowercase={false}
        required={true}
      />
      {hasError && (
        <p className="font-sans text-base font-light tracking-tighter text-red-600">
          Forkert e-mail eller adgangskode.
        </p>
      )}
      <div>
        <RoundedButton text="Log ind" type="submit" primaryButton={true} />
      </div>
    </form>
  );
};
