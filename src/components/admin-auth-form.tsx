import { useState } from 'react';

const INPUT = 'border-b border-black bg-transparent py-2 outline-none';
const LINK = 'cursor-pointer text-left underline underline-offset-4';

export const AdminAuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
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
      <button type="submit" className={LINK}>
        {isRegister ? 'Register' : 'Log in'}
      </button>
      <button
        type="button"
        onClick={() => setIsRegister(!isRegister)}
        className={`${LINK} text-black/50`}
      >
        {isRegister ? 'Back to log in' : 'Register'}
      </button>
    </form>
  );
};
