'use client';

import { useEffect, useState } from 'react';
import PersonCard from '@/components/PersonCard';
import Leaderboards from '@/components/Leaderboards';
import { Person } from '@/types';

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await fetch('/api/people');
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('Failed to fetch people:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPeople();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Naughty or Nice</h1>
      <div className="people-list">
        {people.length === 0 ? (
          <p>No people found</p>
        ) : (
          people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))
        )}
      </div>
      <Leaderboards people={people} />
    </div>
  );
}
