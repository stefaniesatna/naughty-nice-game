'use client';

import { useState, useEffect } from 'react';
import Avatar from 'boring-avatars';
import { updateOptIn } from '@/data/people';

interface PersonCardProps {
  person: {
    id: string;
    name: string;
    hasOptedIn: boolean;
  };
}

export default function PersonCard({ person }: PersonCardProps) {
  const [hasOptedIn, setHasOptedIn] = useState(person.hasOptedIn);

  useEffect(() => {
    setHasOptedIn(person.hasOptedIn);
  }, [person.hasOptedIn]);

  const handleOptIn = async () => {
    setHasOptedIn(true);
    await updateOptIn(person.id, true);
  };

  return (
    <div className="person-card">
      <div className="person-info">
        <Avatar
          size={40}
          name={person.name}
          variant="beam"
          colors={[
            "#D42426", // Bright Christmas red
            "#165B33", // Forest green
            "#E8B36C", // Warm copper
            "#850012", // Deep burgundy red
            "#1A472A"  // Dark pine green
          ]}
        />
        <span>{person.name}</span>
      </div>
      <div className="button-group">
        {!hasOptedIn ? (
          <button onClick={handleOptIn}>
            Opt In
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