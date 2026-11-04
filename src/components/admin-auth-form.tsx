import { useState } from 'react';

const INPUT = 'border-b border-black bg-transparent py-2 outline-none';
const LINK = 'cursor-pointer text-left underline underline-offset-4';

export const AdminAuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isRegister) return;

    const form = event.currentTarget;
    const { email, password } = Object.fromEntries(new FormData(form));
    setIsPending(true);

    try {
      const { registerAdmin } = await import('../lib/register-admin');
      await registerAdmin(String(email), String(password));
      form.reset();
      setMessage(
        'Account created. An admin must approve it before you get access.'
      );
    } catch (error) {
      setMessage(
        (error as { code?: string }).code === 'auth/email-already-in-use'
          ? 'This email is already registered.'
          : 'Could not register. Check your email and use a password of 6+ characters.'
      );
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
