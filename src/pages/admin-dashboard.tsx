import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { AdminLogin } from '../components/admin-login';
import { MemberTable } from '../components/member-table';
import { logOut, onUserChange } from '../lib/admin';

export const AdminDashboard = () => {
  // undefined = still checking if someone is logged in
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => onUserChange(setUser), []);

  if (user === undefined) return null;

  return (
    <main className="mt-30 mb-30 flex flex-col items-center justify-center px-3 lg:min-h-screen">
      <header className="mb-10 flex items-end justify-between lg:mb-16">
        <h1 className="text-l cursor-default font-sans leading-tight font-medium tracking-tighter text-[#383838] lg:text-9xl">
          Admin
        </h1>
        {user && (
          <button
            onClick={logOut}
            className="cursor-pointer font-sans text-xl font-light tracking-tighter text-[#29ABE2] underline underline-offset-4"
          >
            Log ud
          </button>
        )}
      </header>
      {user ? <MemberTable /> : <AdminLogin />}
    </main>
  );
};
