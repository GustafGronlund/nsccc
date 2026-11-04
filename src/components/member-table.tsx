import { useEffect, useState } from 'react';
import { fetchMembers, type Member } from '../lib/members';

const COLUMNS: { label: string; value: (member: Member) => string }[] = [
  { label: 'Navn', value: (m) => `${m.firstName} ${m.lastName}` },
  { label: 'Adresse', value: (m) => `${m.street}, ${m.zipCode} ${m.city}` },
  { label: 'E-mail', value: (m) => m.email },
  { label: 'Mobil', value: (m) => m.mobile },
  { label: 'Køretøj', value: (m) => m.veteranVehicle ?? '' },
  { label: 'Kommentar', value: (m) => m.comment ?? '' },
  {
    label: 'Tilmeldt',
    value: (m) => m.wasRegistred.toDate().toLocaleDateString('da-DK'),
  },
];

export const MemberTable = () => {
  const [members, setMembers] = useState<Member[]>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchMembers().then(setMembers, () => setHasError(true));
  }, []);

  if (hasError) return <p>Kunne ikke hente medlemmer.</p>;
  if (!members) return <p>Henter...</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-black">
            {COLUMNS.map(({ label }) => (
              <th key={label} className="py-2 pr-4 font-normal text-black/50">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-black/10">
              {COLUMNS.map(({ label, value }) => (
                <td key={label} className="py-2 pr-4 align-top">
                  {value(member)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
