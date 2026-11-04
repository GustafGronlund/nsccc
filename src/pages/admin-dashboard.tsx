import { useEffect, useState } from 'react';
import { AdminAuthForm } from '../components/admin-auth-form';
import { MemberTable } from '../components/member-table';
import { logOut, onStatusChange, type AuthStatus } from '../lib/auth';

const PAGE = 'min-h-screen bg-white p-8 font-mono text-sm text-black';

const LogOutButton = () => (
  <button
    onClick={logOut}
    className="cursor-pointer underline underline-offset-4"
  >
    Log ud
  </button>
);

export const AdminDashboard = () => {
  const [status, setStatus] = useState<AuthStatus>();

  useEffect(() => onStatusChange(setStatus), []);

  if (!status) return null;

  if (status === 'admin') {
    return (
      <main className={PAGE}>
        <header className="mb-8 flex items-baseline justify-between">
          <h1 className="tracking-widest uppercase">Medlemmer</h1>
          <LogOutButton />
        </header>
        <MemberTable />
      </main>
    );
  }

  return (
    <main className={`${PAGE} flex flex-col items-center justify-center gap-5`}>
      {status === 'out' ? (
        <AdminAuthForm />
      ) : (
        <>
          <p>Din konto er endnu ikke godkendt.</p>
          <LogOutButton />
        </>
      )}
    </main>
  );
};
