'use client';

import { useRouter } from 'next/navigation';
import Avatar from 'boring-avatars';

interface PersonCardProps {
  person: {
    id: string;
    name: string;
    hasOptedIn: boolean;
  };
}

export default function PersonCard({ person }: PersonCardProps) {
  const router = useRouter();

  return (
    <div className="person-card">
      <div className="person-info">
        <Avatar
          size={40}
          name={person.name}
          variant="beam"
          colors={[
            "#D42426",
            "#165B33",
            "#E8B36C",
            "#850012",
            "#1A472A"
          ]}
        />
        <span>{person.name}</span>
      </div>
      <div className="button-group">
        {!person.hasOptedIn ? (
          <button onClick={() => router.push(`/payment/${person.id}`)}>
            Opt In (50p)
          </button>
        ) : (
          <>
            <button className="naughty-button">Vote Naughty</button>
            <button className="redeem-button">Redeem</button>
          </>
        )}
      </div>
    </div>
  );
}