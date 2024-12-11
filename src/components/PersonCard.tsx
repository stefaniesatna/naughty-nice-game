'use client';

import { useRouter } from 'next/navigation';
import Avatar from 'boring-avatars';

interface PersonCardProps {
  person: {
    id: string;
    name: string;
    hasOptedIn: boolean;
    score: number;
  };
}

export default function PersonCard({ person }: PersonCardProps) {
  const router = useRouter();

  const handleVoteNaughty = () => {
    router.push(`/payment/${person.id}?action=vote`);
  };

  const handleRedeem = () => {
    router.push(`/payment/${person.id}?action=redeem`);
  };

  return (
    <div className="person-card">
      <div className="person-info">
        <Avatar
          size={40}
          name={person.name}
          variant="beam"
          colors={["#D42426", "#165B33", "#E8B36C", "#850012", "#1A472A"]}
        />
        <div className="person-details">
          <span>{person.name}</span>
          {person.hasOptedIn && (
            <span className="score">
              {` `}Balance: {person.score}
            </span>
          )}
        </div>
      </div>
      <div className="button-group">
        {!person.hasOptedIn ? (
          <button onClick={() => router.push(`/payment/${person.id}?action=optin`)}>
            Opt In (50p)
          </button>
        ) : (
          <>
            <button className="naughty-button" onClick={handleVoteNaughty}>
              Vote Naughty (50p)
            </button>
            <button className="redeem-button" onClick={handleRedeem}>
              Redeem (50p)
            </button>
          </>
        )}
      </div>
    </div>
  );
}