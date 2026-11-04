import { useEffect, useState } from 'react';
import { AdminAuthForm } from '../components/admin-auth-form';
import { logOut, onStatusChange, type AuthStatus } from '../lib/auth';

export const AdminDashboard = () => {
  const [status, setStatus] = useState<AuthStatus>();

  useEffect(() => onStatusChange(setStatus), []);

  if (!status) return null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-white font-mono text-sm text-black">
      {status === 'out' ? (
        <AdminAuthForm />
      ) : (
        <div className="flex flex-col gap-5">
          <p>
            {status === 'admin'
              ? 'Logged in.'
              : 'Your account is not approved yet.'}
          </p>
          <button
            onClick={logOut}
            className="cursor-pointer text-left underline underline-offset-4"
          >
            Log out
          </button>
        </div>
      )}
    </main>
  );
};
