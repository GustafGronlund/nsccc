export const AdminLogin = () => {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex w-72 flex-col gap-5 text-sm text-black"
    >
      <h1 className="tracking-widest uppercase">Admin</h1>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        autoComplete="email"
        className="border-b border-black bg-transparent py-2 outline-none"
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        autoComplete="current-password"
        className="border-b border-black bg-transparent py-2 outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer text-left underline underline-offset-4"
      >
        Log in
      </button>
    </form>
  );
};
