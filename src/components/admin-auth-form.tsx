import { useState } from 'react';
import { logIn, register } from '../lib/auth';

const INPUT = 'border-b border-black bg-transparent py-2 outline-none';
const LINK = 'cursor-pointer text-left underline underline-offset-4';

const ERRORS: Record<string, string> = {
  'auth/email-already-in-use': 'This email is already registered.',
  'auth/invalid-credential': 'Wrong email or password.',
  'auth/weak-password': 'Password must be at least 6 characters.',
  'auth/too-many-requests': 'Too many attempts. Try again later.',
};

export const AdminAuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );
    const submit = isRegister ? register : logIn;
    setIsPending(true);

    try {
      await submit(String(email), String(password));
    } catch (error) {
      const { code = '' } = error as { code?: string };
      setMessage(ERRORS[code] ?? 'Something went wrong. Try again.');
    } finally {
      setIsPending(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setMessage('');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-72 flex-col gap-5 text-sm text-black"
    >
      <h1 className="tracking-widest uppercase">
        {isRegister ? 'Register' : 'Admin'}
      </h1>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        autoComplete="email"
        className={INPUT}
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        autoComplete={isRegister ? 'new-password' : 'current-password'}
        className={INPUT}
      />
      {message && <p>{message}</p>}
      <button
        type="submit"
        disabled={isPending}
        className={`${LINK} disabled:cursor-wait disabled:opacity-50`}
      >
        {isRegister ? 'Register' : 'Log in'}
      </button>
      <button
        type="button"
        onClick={toggleMode}
        className={`${LINK} text-black/50`}
      >
        {isRegister ? 'Back to log in' : 'Register'}
      </button>
    </form>
  );
};
