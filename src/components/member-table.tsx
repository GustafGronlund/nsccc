import { useEffect, useState } from 'react';
import { fetchMembers, type Member } from '../lib/admin';

const TEXT =
  'font-sans text-xl leading-tight font-light tracking-tighter text-[#383838]';

const COLUMNS: { label: string; value: (member: Member) => string }[] = [
  { label: 'Navn', value: (m) => `${m.firstName} ${m.lastName}` },
  { label: 'Adresse', value: (m) => `${m.street}, ${m.zipCode} ${m.city}` },
  { label: 'Mobil', value: (m) => m.mobile },
  { label: 'E-mail', value: (m) => m.email },
  { label: 'Køretøj', value: (m) => m.veteranVehicle ?? '' },
  { label: 'Kommentar', value: (m) => m.comment ?? '' },
  {
    label: 'Tilmeldt',
    value: (m) => m.wasRegistred.toDate().toLocaleDateString('da-DK'),
  },
];

export const MemberTable = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [status, setStatus] = useState<'loading' | 'denied' | 'ready'>(
    'loading'
  );

  useEffect(() => {
    fetchMembers()
      .then((data) => {
        setMembers(data);
        setStatus('ready');
      })
      .catch(() => setStatus('denied'));
  }, []);

  if (status === 'loading') return null;
  if (status === 'denied') return <p className={TEXT}>Du har ikke adgang.</p>;

  return (
    <section>
      <p className={`${TEXT} mb-6`}>{members.length} medlemmer</p>
      <div className="overflow-x-auto">
        <table className={`${TEXT} w-full min-w-250 text-left text-base`}>
          <thead>
            <tr className="border-b-2 border-[#29ABE2] text-[#29ABE2]">
              {COLUMNS.map(({ label }) => (
                <th key={label} className="py-3 pr-4 font-light">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-[#29ABE2]/30">
                {COLUMNS.map(({ label, value }) => (
                  <td key={label} className="py-3 pr-4 align-top">
                    {value(member)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
